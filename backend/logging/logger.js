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
*   File: logger.js                                                 *
*   Description: This file contains the central logging system that *
*                can log data from both the frontend and backend    *
*                of the Sagrop application. The logger uses the     *
*                Winston library for structured logging and logs    *
*                data to both the console and a rotating log file.  *
*                                                                   *
*   Author: Acronym Web Design Team | AjM                           *
*                                                                   *
*********************************************************************
*/

const fs = require('fs');
const path = require('path');
const { createLogger, format, transports } = require('winston');

const logDir = path.join(__dirname, 'logs');
const logFilePath = path.join(logDir, '.log');

// Create the log directory if it doesn't exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

/**
 * Creates a new Winston logger instance with file and console transports.
 * @type {import('winston').Logger}
 */
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`)
  ),
  transports: [
    new transports.File({ filename: logFilePath, maxsize: 1000000, maxFiles: 5 }), // Log to a file with rotation
    new transports.Console(), // Log to the console for development/debugging
  ],
});

/**
 * Logs data to the central logging system.
 * @param {string} source - The source of the log (e.g., 'frontend' or 'backend').
 * @param {any} data - The data to be logged.
 */
const logData = (source, data) => {
  logger.info(`[${source.toUpperCase()}] ${JSON.stringify(data)}`);
};

/**
 * Clears the log file on each restart of the backend.
 */
const clearLogFile = () => {
  fs.writeFileSync(logFilePath, '');
};

module.exports = {
  logData,
  clearLogFile,
};