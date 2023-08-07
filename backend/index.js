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
*   File: index.js                                                  *
*   Description: This is the main entry point for the Sagrop        *
*                application. It sets up the Express server,        *
*                configures middleware, and defines the routes      *
*                for the API.                                       *
*                                                                   *
*                                                                   *
*   Author: Acronym Web Design Team | AjM                           *
*                                                                   *
*********************************************************************
*/

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const dotenv = require('dotenv');
const app = express();

const routes = require('./routes/routes');

dotenv.config();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS) to allow requests from other domains.
app.use(express.json()); // Parse incoming JSON data in the request body.
app.use(express.urlencoded({ extended: false })); // Parse incoming form data in the request body.
app.use(helmet()); // Set various HTTP headers to enhance security (e.g., XSS protection, content-type options).
app.use(compression()); // Use Gzip compression to reduce response size and improve network performance.
app.use(morgan('combined')); // Use Morgan middleware for structured logging of HTTP requests.

// Error handling middleware
app.use((err, req, res, next) => {
  logData('index.js', `Unhandled Error: ${err.stack}`);
  console.error(err.stack);
  res.status(500).json({ message: 'Server Error' }); // Send a generic error response for unhandled exceptions.
});

// Content Security Policy (CSP) middleware
app.use((req, res, next) => {
  // Set Content Security Policy to restrict resource loading and prevent various attacks (e.g., XSS, clickjacking).
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self'; style-src 'self'"
  );
  next();
});

// Routes
app.use('/api', routes); // Mount the API routes defined in the 'routes.js' file under the '/api' path.

// Start the server
const PORT = process.env.PORT || 5000; // Use the provided PORT environment variable or default to 5000.
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});