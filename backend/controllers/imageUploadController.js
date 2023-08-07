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
*   File: imageUploadController.js                                  *
*   Description: This file contains the image upload algorithm      *
*                for the Sagrop application. The algorithm uses     *
*                the 'multer' library to handle image uploads       *
*                and stores the images in the local file system     *
*                in a designated directory.                         *
*                                                                   *
*   Author: Acronym Web Design Team | AjM                           *
*                                                                   *
*********************************************************************
*/

const path = require('path');
const multer = require('multer');

/**
 * The disk storage configuration for multer.
 * This defines where and how to save the uploaded images.
 */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../public/uploads')); // Adjust the destination folder as needed
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Initialize multer with the defined storage
const upload = multer({ storage });

/**
 * Handles image upload for the Sagrop application.
 * @param {Object} req - The request object from Express.
 * @param {Object} res - The response object from Express.
 * @returns {void}
 * @throws {Error} If there is an error uploading the image.
 */
const handleImageUpload = (req, res) => {
  upload.single('image')(req, res, (err) => {
    if (err) {
      console.error('Error uploading image:', err.message);
      return res.status(500).json({ message: 'Error uploading image' });
    }

    // Image uploaded successfully, return the image URL
    const imageUrl = `../../../public/uploads/${req.file.filename}`;
    return res.status(200).json({ imageUrl });
  });
};

module.exports = { handleImageUpload };