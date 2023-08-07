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
*   File: bcrypt.js                                                 *
*   Description: This file provides a function to generate bcrypt   *
*                hashed passwords for user authentication.          *
*                The file uses the 'bcrypt' library for password    *
*                hashing.                                           *
*                                                                   *
*   Author: Acronym Web Design Team | AjM                           *
*                                                                   *
*********************************************************************
*/

const bcrypt = require('bcrypt');

const { logData } = require('../logging/logger');

/**
 * Generates a bcrypt hashed password for a given password.
 * @param {string} password - The plain text password to be hashed.
 * @returns {string} - The bcrypt hashed password.
 */
const createAdminUser = async (password) => {
  try {
    // Hash the provided password with bcrypt and a salt round of 10
    const hashedPassword = await bcrypt.hash(password, 10);

    // Log the hashed password (you can return it if needed for further processing)
    console.log('Encrypted Password:', hashedPassword);
    return hashedPassword; // Return the hashed password if needed for further processing
  } catch (error) {
    // If there's an error during the process, log the error along with the file name and description
    const errorMessage = `Error creating admin user: ${error.message}`;
    logData('bcrypt.js', errorMessage);
    console.error(errorMessage);
    throw new Error('Error creating admin user');
  }
};

// Replace this with the actual password you want to hash
const password = 'Aa123456';

(async () => {
  try {
    // Call the createAdminUser function to generate the hashed password
    const hashedPassword = await createAdminUser(password);

    // You can perform further operations with the hashed password if needed
    console.log('Hashed password:', hashedPassword);
  } catch (error) {
    console.error('Error occurred:', error);
  }
})();