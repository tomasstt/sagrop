/*
*********************************************************************
*                                                                   *
*              Copyright © 2023 Acronym Web Design                  *
*           All rights reserved. Unauthorized copying               *
*        or reproduction of this file or its contents is            *
*           prohibited. This file is proprietary and                *
*         confidential. It may not be disclosed, copied,            *
*                  reproduced or used without                       *
*            express written permission from Acronym.               *
*                                                                   *
*   File: routes.js                                                 *
*   Description: This file defines the routes for the Express       *
*                application, particularly the login, protected,    *
*                and auth routes. It also includes middleware       *
*                functions for request validation, rate limiting,   *
*                and authentication.                                *
*                                                                   *
*   Author: Acronym Web Design Team | AjM                           *
*                                                                   *
*********************************************************************
*/

const express = require('express');
const validator = require('validator');
const path = require('path');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});

const { getAdminUserByEmail, addEmailToDatabase } = require('../db');
const { generateToken, authenticateAdmin, comparePasswords } = require('../auth');
const articleService = require('../services/articleService/articleService');
const commoditiesService = require('../services/commoditiesService/commoditiesService');
const { handleImageUpload } = require('../controllers/imageUploadController');
const { logData } = require('../logging/logger');
const { log } = require('console');

require('dotenv').config();

/**
 * Handles user login and issues a JWT token upon successful authentication.
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @returns {Object} - If login is successful, sends a 200 response with the JWT token and isAdmin flag. Otherwise, sends a 401 response with an error message.
 */
router.post(
  '/login',
  [
    // Validate email and password
    body('email').isEmail().normalizeEmail().withMessage('Neplatný formát e-mailu.'),
    body('password').isLength({ min: 8 }).withMessage('Heslo musí obsahovať minimálne 8 znakov.'),
    body('password').matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/).withMessage('Heslo musí obsahovať aspoň jedno veľké písmeno, jedno malé písmeno a jedno číslo.'),
  ],
  limiter,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      logData('routes.js', `Attempting to find user by email: ${email}`);

      // Get the user from the database based on the provided email
      const user = await getAdminUserByEmail(email);

      // If user not found or invalid credentials, return 401
      if (!user || !await comparePasswords(password, user.password)) {
        logData('routes.js', `User not found or invalid credentials for email: ${email}`);
        return res.status(401).json({ message: 'Neplatný e-mail alebo heslo.' });
      }

      // Admin user is found and authenticated
      const adminUser = { email: user.email, id: user.id }; // Assuming user object has an 'id' property

      logData('routes.js', `User found and authenticated: ${adminUser.email}`);

      // Check if the user is an admin (you may have a different method to determine this)
      const isAdmin = true; // Assuming the user is an admin in this example

      // Generate a JWT token with the user information and isAdmin flag
      const token = generateToken(adminUser, isAdmin);

      // Return the token and isAdmin flag to the client
      res.status(200).json({ token, isAdmin });
    } catch (error) {
      logData('routes.js', `Error occurred during login: ${error.message}`);
      res.status(500).json({ message: 'Prihlásenie zlyhalo. Skúste to prosím znova neskôr.' }); // Update the error message returned to the client
    }
  }
);

/**
 * Middleware to check if the user is an admin.
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {function} next - The next middleware function.
 * @returns {Object} - If authenticated, sets the req.user object and calls the next middleware. Otherwise, sends a 401 response.
 */
router.get('/check-admin', authenticateAdmin, (req, res) => {
  res.json({ isAdmin: true });
});

/**
 * POST /api/upload-image
 * Handles the image upload and returns the uploaded image URL.
 */
router.post('/upload-image', handleImageUpload, (req, res) => {
  // Get the image URL/key from the 'req.file' object provided by multer
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

  // Send the URL of the uploaded image in the response
  res.status(200).json({ imageUrl });
});

/**
 * API endpoint to save an article.
 * Example: POST /api/articles
 */
router.post('/articles', async (req, res) => {
  const { articleTitle, articleContent, articlePublication, articleImageUrl } = req.body;
  try {
    // Validate articlePublication is provided
    if (!articlePublication) {
      return res.status(400).json({ message: 'articlePublication is required.' });
    }

    // Call the saveArticle function from articleService.js to save the article
    const article = await articleService.saveArticle(articleTitle, articleContent, articlePublication, articleImageUrl);

    // Send a successful response with the saved article
    res.status(200).json(article);
  } catch (error) {
    logData('routes.js', `Error saving article: ${error.message}`);
    res.status(500).json({ message: 'Error saving article' });
  }
});

/**
 * API endpoint to get all articles.
 * Example: GET /api/articles
 */
router.get('/articles', async (req, res) => {
  try {
    // Call the getAllArticles function from articleService.js to get all articles
    const articles = await articleService.getArticle();
    res.status(200).json(articles);
  } catch (error) {
    logData('routes.js', `Error retrieving articles: ${error.message}`);
    res.status(500).json({ message: 'Error retrieving articles' });
  }
});

/**
 * API endpoint to update an article by ID.
 * Example: PUT /api/articles/1
 */
router.put('/articles/:id', async (req, res) => {
  const { id } = req.params;
  const { articleTitle, articleContent, articlePublication, articleImageUrl } = req.body;
  try {
    // Call the updateArticle function from articleService.js to update the article by ID
    const updatedArticle = await articleService.updateArticle(parseInt(id, 10), {
      articleTitle,
      articleContent,
      articlePublication,
      articleImageUrl,
    });

    if (!updatedArticle) {
      return res.status(404).json({ message: 'Article not found' });
    }

    res.status(200).json(updatedArticle);
  } catch (error) {
    logData('routes.js', `Error updating article: ${error.message}`);
    res.status(500).json({ message: 'Error updating article' });
  }
});

/**
 * Delete an article by its ID.
 *
 * @route DELETE /api/articles/:id
 * @param {string} id - The ID of the article to delete.
 * @returns {object} A message indicating the deletion status.
 * @throws {404} If the article is not found.
 * @throws {500} If there is an error deleting the article or the associated image.
 */
router.delete('/articles/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Get the article by ID to check if it exists and to get the image path
    const article = await articleService.getArticle(id);

    // If the article does not exist, return a 404 status
    if (!article) {
      return res.status(404).json({ message: 'Article not found.' });
    }
    
    // Delete the article image if it exists
    if (article.article_image_url) {
      const imagePath = path.join(__dirname, '../public/uploads', article.article_image_url);
      await articleService.deleteArticleImage(imagePath);
    }

    // Delete the article
    await articleService.deleteArticle(id);

    res.status(200).json({ message: 'Article deleted successfully.' });
  } catch (error) {
    console.error('Error deleting article:', error.message);
    res.status(500).json({ message: 'Error deleting article' });
  }
});

/**
 * Save a new commodity to the database.
 * @param {string} name - The name of the commodity.
 * @param {string} inquiry - The inquiry details of the commodity.
 * @param {string} offer - The offer details of the commodity.
 * @param {number} price - The price of the commodity.
 * @param {number} amount - The amount of the commodity.
 * @param {Date} date - The date of the commodity.
 * @param {string} parita - The parita details of the commodity.
 * @returns {Promise<void>} - A Promise that resolves after saving the commodity or rejects on error.
 * @throws {Error} - If there's an error saving the commodity.
 */
router.post('/commodities', async (req, res) => {
  const { name, inquiry, offer, price, amount, date, parita } = req.body;
  try {
    await commoditiesService.saveCommodity(name, inquiry, offer, price, amount, date, parita);
    logData('routes.js', 'Commodity saved successfully');
    res.status(201).json({ message: 'Commodity saved successfully' });
  } catch (error) {
    logData('routes.js', `Error saving commodity: ${error.message}`);
    console.error('Error saving commodity:', error.message);
    res.status(500).json({ message: 'Error saving commodity' });
  }
});

/**
 * Retrieve all commodities from the database.
 * @returns {Promise<Object[]>} - A Promise that resolves with an array of commodities or an empty array if no commodities are found.
 * @throws {Error} - If there's an error retrieving commodities.
*/
router.get('/commodities', async (req, res) => {
  try {
    const commodities = await commoditiesService.getAllCommodities();
    logData('routes.js', 'Commodities retrieved successfully');
    res.status(200).json(commodities);
  } catch (error) {
    logData('routes.js', `Error retrieving commodities: ${error.message}`);
    console.error('Error retrieving commodities:', error.message);
    res.status(500).json({ message: 'Error retrieving commodities' });
  }
});

/**
 * Update an existing commodity in the database.
 * @param {number} id - The ID of the commodity to update.
 * @param {string} name - The updated name of the commodity.
 * @param {string} inquiry - The updated inquiry details of the commodity.
 * @param {string} offer - The updated offer details of the commodity.
 * @param {number} price - The updated price of the commodity.
 * @param {number} amount - The updated amount of the commodity.
 * @param {Date} date - The updated date of the commodity.
 * @param {string} parita - The updated parita details of the commodity.
 * @returns {Promise<void>} - A Promise that resolves after updating the commodity or rejects on error.
 * @throws {Error} - If there's an error updating the commodity.
 */
router.put('/commodities/:id', async (req, res) => {
  const { id } = req.params;
  const { name, inquiry, offer, price, amount, date, parita } = req.body;
  try {
    await commoditiesService.updateCommodity(id, name, inquiry, offer, price, amount, date, parita);
    logData('routes.js', 'Commodity updated successfully');
    res.status(200).json({ message: 'Commodity updated successfully' });
  } catch (error) {
    logData('routes.js', `Error updating commodity: ${error.message}`);
    console.error('Error updating commodity:', error.message);
    res.status(500).json({ message: 'Error updating commodity' });
  }
});

/**
 * Delete a commodity from the database.
 * @param {number} id - The ID of the commodity to delete.
 * @returns {Promise<void>} - A Promise that resolves after deleting the commodity or rejects on error.
 * @throws {Error} - If there's an error deleting the commodity.
 */
router.delete('/commodities/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await commoditiesService.deleteCommodity(id);
    logData('routes.js', 'Commodity deleted successfully');
    res.status(200).json({ message: 'Commodity deleted successfully' });
  } catch (error) {
    logData('routes.js', `Error deleting commodity: ${error.message}`);
    console.error('Error deleting commodity:', error.message);
    res.status(500).json({ message: 'Error deleting commodity' });
  }
});

/**
 * Add an email address to the database.
 *
 * @route POST /api/add-email
 * @param {string} email - The email address to add to the database.
 * @returns {object} A message indicating the success or failure of the operation.
 * @throws {400} If the email is missing or invalid.
 * @throws {401} If the user is not authenticated as an admin.
 * @throws {500} If there is an error adding the email to the database.
 */
router.post('/add-email',
  async (req, res) => {
    const { email } = req.body;

    try {
      // Validate email address
      if (!email || !validator.isEmail(email)) {
        return res.status(400).json({ message: 'Invalid email address.' });
      }

      // Call the addEmailToDatabase function from db.js to add the email address
      await addEmailToDatabase(email);

      res.status(201).json({ message: 'Email address added successfully.' });
    } catch (error) {
      logData('routes.js', `Error adding ${ email }: ${error.message}`);
      res.status(500).json({ message: error.message });
    }
  }
);

/**
 * Send email to all subscribers about a new article being published.
 *
 * @route POST /api/send-article-email
 * @param {string} articleTitle - The title of the new article.
 * @param {string} articleContent - The content of the new article.
 * @returns {object} A message indicating the success or failure of the operation.
 * @throws {400} If the article title or content is missing.
 * @throws {401} If the user is not authenticated as an admin.
 * @throws {500} If there is an error sending emails to subscribers.
 */
router.post('/send-article-email',
  authenticateAdmin, // Middleware to authenticate admin user
  async (req, res) => {
    const { articleTitle, articleContent } = req.body;

    try {
      // Validate article title and content
      if (!articleTitle || !articleContent) {
        return res.status(400).json({ message: 'Article title and content are required.' });
      }

      // Call the sendEmailToSubscribers function from emailService.js to send emails
      await sendEmailToSubscribers(articleTitle, articleContent);

      res.status(200).json({ message: 'Emails sent successfully to subscribers.' });
    } catch (error) {
      logData('routes.js', `Error sending article emails: ${error.message}`);
      res.status(500).json({ message: error.message });
    }
  }
);


/**
 * Logs data received from the client to the server console.
 * @param {Object} req - The request object from Express.
 * @param {Object} res - The response object from Express.
 * @returns {void}
 */
router.post('/log', (req, res) => {
  const { source, message } = req.body;
  console.log(`[${source}] ${message}`);
  logData(source, message); // Assuming the logData function is defined elsewhere
  res.sendStatus(200);
});

// Export the router
module.exports = router;