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
*   File: articleService.js                                         *
*   Description: This file contains functions to interact with the  *
*                articles in the database. It provides functions    *
*                to save and retrieve articles. The database        *
*                interaction is abstracted through the functions    *
*                from the 'db.js' module, which uses PostgreSQL     *
*                and a connection pool for asynchronous query       *
*                execution.                                         *
*                                                                   *
*   Author: Acronym Web Design Team | AjM                           *
*                                                                   *
*********************************************************************
*/

const path = require('path');
const fs = require('fs');

const { logData } = require('../../logging/logger');
const db = require('../../db');

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

/**
 * Save an article to the database.
 * @param {string} articleTitle - The title of the article.
 * @param {string} articleContent - The content of the article.
 * @param {string} [articleImageUrl] - The URL of the article image (optional).
 * @param {string} [articlePublication] - The publication date of the article (optional).
 * @returns {Promise<void>} - A Promise that resolves after saving the article or rejects on error.
 * @throws {Error} - If there's an error saving the article.
 */
const saveArticle = async (articleTitle, articleContent, articlePublication, articleImageUrl) => {
  try {
    await db.saveArticle(articleTitle, articleContent, articlePublication, articleImageUrl);
  } catch (error) {
    logData('articleService.js', `Error saving article: ${error.message}`);
    throw error;
  }
};

/**
 * Retrieve an article by ID or the latest article if no ID is provided.
 * @param {number} [id] - The ID of the article to retrieve. If not provided, the latest article will be retrieved.
 * @returns {Promise<Object|null>} - A Promise that resolves with the article object or null if no article is found.
 * @throws {Error} - If there's an error retrieving the article.
 */
const getArticle = async (id) => {
  try {
    return await db.getArticle(id);
  } catch (error) {
    logData('articleService.js', `Error retrieving article: ${error.message}`);
    throw error;
  }
};

/**
 * Update an existing article in the database.
 * @param {number} id - The ID of the article to update.
 * @param {string} articleTitle - The updated title of the article.
 * @param {string} articleContent - The updated content of the article.
 * @param {string} [articleImageUrl] - The updated URL of the article image (optional).
 * @param {string} [articlePublication] - The updated publication date of the article (optional).
 * @returns {Promise<void>} - A Promise that resolves after updating the article or rejects on error.
 * @throws {Error} - If there's an error updating the article.
 */
const updateArticle = async (id, articleTitle, articleContent, articlePublication, articleImageUrl) => {
  try {
    await db.updateArticle(id, articleTitle, articleContent, articlePublication, articleImageUrl);
  } catch (error) {
    logData('articleService.js', `Error updating article: ${error.message}`);
    throw error;
  }
};

/**
 * Delete an article from the database.
 * @param {number} id - The ID of the article to delete.
 * @returns {Promise<void>} - A Promise that resolves after deleting the article or rejects on error.
 * @throws {Error} - If there's an error deleting the article.
 */
const deleteArticle = async (id) => {
  try {
    await db.deleteArticle(id);
  } catch (error) {
    logData('articleService.js', `Error deleting article: ${error.message}`);
    throw error;
  }
};

/**
 * Delete the image file associated with the article.
 * @param {string} imagePath - The path of the image file to be deleted.
 * @returns {Promise<void>}
 */
const deleteArticleImage = async (imagePath) => {
  return new Promise((resolve, reject) => {
    fs.unlink(imagePath, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

module.exports = {
  saveArticle,
  getArticle,
  updateArticle,
  deleteArticle,
  deleteArticleImage,
};