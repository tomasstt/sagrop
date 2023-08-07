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
*   File: commoditiesService.js                                     *
*   Description: This file contains functions to interact with the  *
*                commodities in the database. It provides functions *
*                to save, retrieve, update, and delete commodities *
*                data. The database interaction is abstracted      *
*                through the functions from the 'db.js' module,     *
*                which uses PostgreSQL and a connection pool for   *
*                asynchronous query execution.                     *
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
 * Save a commodity to the database.
 * @param {string} name - The name of the commodity.
 * @param {string} inquiry - The inquiry of the commodity.
 * @param {string} offer - The offer of the commodity.
 * @param {number} price - The price of the commodity.
 * @param {number} amount - The amount of the commodity.
 * @param {Date} date - The date of the commodity.
 * @param {string} parita - The parita of the commodity.
 * @returns {Promise<void>} - A Promise that resolves after saving the commodity or rejects on error.
 * @throws {Error} - If there's an error saving the commodity.
 */
const saveCommodity = async (name, inquiry, offer, price, amount, date, parita) => {
  try {
    await db.saveCommodity(name, inquiry, offer, price, amount, date, parita);
  } catch (error) {
    logData('commoditiesService.js', `Error saving commodity: ${error.message}`);
    throw error;
  }
};

/**
 * Retrieve all commodities from the database.
 * @returns {Promise<Array>} - A Promise that resolves with an array of commodities or an empty array if no commodities are found.
 * @throws {Error} - If there's an error retrieving the commodities.
 */
const getAllCommodities = async () => {
  try {
    return await db.getAllCommodities();
  } catch (error) {
    logData('commoditiesService.js', `Error retrieving commodities: ${error.message}`);
    throw error;
  }
};

/**
 * Update an existing commodity in the database.
 * @param {number} id - The ID of the commodity to update.
 * @param {string} name - The updated name of the commodity.
 * @param {string} inquiry - The updated inquiry of the commodity.
 * @param {string} offer - The updated offer of the commodity.
 * @param {number} price - The updated price of the commodity.
 * @param {number} amount - The updated amount of the commodity.
 * @param {Date} date - The updated date of the commodity.
 * @param {string} parita - The updated parita of the commodity.
 * @returns {Promise<void>} - A Promise that resolves after updating the commodity or rejects on error.
 * @throws {Error} - If there's an error updating the commodity.
 */
const updateCommodity = async (id, name, inquiry, offer, price, amount, date, parita) => {
  try {
    await db.updateCommodity(id, name, inquiry, offer, price, amount, date, parita);
  } catch (error) {
    logData('commoditiesService.js', `Error updating commodity: ${error.message}`);
    throw error;
  }
};

/**
 * Delete a commodity from the database.
 * @param {number} id - The ID of the commodity to delete.
 * @returns {Promise<void>} - A Promise that resolves after deleting the commodity or rejects on error.
 * @throws {Error} - If there's an error deleting the commodity.
 */
const deleteCommodity = async (id) => {
  try {
    await db.deleteCommodity(id);
  } catch (error) {
    logData('commoditiesService.js', `Error deleting commodity: ${error.message}`);
    throw error;
  }
};

module.exports = {
  saveCommodity,
  getAllCommodities,
  updateCommodity,
  deleteCommodity,
};