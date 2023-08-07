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
*   File: auth.js                                                   *
*   Description: This file provides functions for JWT token         *
*                generation and user authentication. The file       *
*                uses the 'jsonwebtoken' library for generating     *
*                tokens and 'bcrypt' for secure password            *
*                hashing and comparison.                            *
*                                                                   *
*   Author: Acronym Web Design Team | AjM                           *
*                                                                   *
*********************************************************************
*/

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
const { logData } = require('./logging/logger');

/**
 * Generates a JWT token for a user with admin permissions.
 * @param {Object} user - The user object to generate the token for.
 * @param {boolean} isAdmin - Flag indicating if the user has admin permissions.
 * @returns {string} - The generated JWT token.
 */
const generateToken = (user, isAdmin) => {
  const secret = process.env.JWT_SECRET;
  return jwt.sign({ id: user.id, isAdmin }, secret, { expiresIn: '1h' });
};

/**
 * Compares a password with its hashed version.
 * @param {string} password - The plain text password to compare.
 * @param {string} hashedPassword - The hashed password stored in the database.
 * @returns {boolean} - True if the password matches the hashed version, otherwise false.
 */
const comparePasswords = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

/**
 * Middleware to authenticate admin users using JWT.
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {function} next - The next middleware function.
 * @returns {Object} - If authenticated, sets the req.user object and calls the next middleware. Otherwise, sends a 401 response.
 */
const authenticateAdmin = async (req, res, next) => {
  // Get the token from the request header
  const token = req.header('Authorization');

  if (!token) {
    // If the token is missing, send a 401 response with a message
    return res.status(401).json({ message: 'Authorization token missing' });
  }

  try {
    // Verify the token using the JWT secret
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the decoded token has the isAdmin flag set to true
    if (!decodedToken.isAdmin) {
      // If the user is not an admin, send a 401 response with a message
      logData('auth.js', `Unauthorized access attempted with token: ${token}`);
      return res.status(401).json({ message: 'Unauthorized. Admin access required.' });
    }

    // If the token is valid and the user is an admin, set the req.user object with the user's id from the decoded token
    req.user = { id: decodedToken.id };
    next();
  } catch (error) {
    // If there's an error during authentication, log the error and send a 401 response with a message
    logData('auth.js', `Invalid token: ${token}`);
    console.error('Error occurred during authentication:', error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = { generateToken, comparePasswords, authenticateAdmin };