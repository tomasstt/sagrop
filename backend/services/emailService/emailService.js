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
*   File: emailService.js                                           *
*   Description: This file provides a function to send custom       *
*                HTML emails to all email addresses in the database.*
*                The file uses the 'nodemailer' library for         *
*                sending emails.                                    *
*                                                                   *
*   Author: Acronym Web Design Team | AjM                           *
*                                                                   *
*********************************************************************
*/

const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const { getAllEmailAddresses } = require('../../db');
const { logData } = require('../../logging/logger');

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

/**
 * Sends custom HTML emails to all the email addresses in the database.
 *
 * @param {string} articleTitle - The title of the new article.
 * @param {string} articleContent - The content of the new article.
 * @returns {Promise<void>} - A Promise that resolves after sending emails or rejects on error.
 * @throws {Error} - If there's an error sending emails.
 */
const sendEmailToSubscribers = async (articleTitle, articleContent) => {
  try {
    // Get all email addresses from the database using the getAllEmailAddresses function
    const emails = await getAllEmailAddresses();

    // Validate email addresses
    if (emails.length === 0) {
      console.log('No email addresses found in the mailing list');
      return;
    }

    // Read the custom email content from the file
    const customHTMLContent = fs.readFileSync('services/emailService/emailContent.html', 'utf8');

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // e.g., 'Gmail' or 'Outlook'
      auth: {
        user: 'testing.acronym@gmail.com', // your email address
        pass: 'cftxcevntkcmjxqf', // your email password or app password
      },
    });

    // Replace placeholders with article information in the HTML content
    const mergedHTMLContent = customHTMLContent
      .replace('{{articleTitle}}', articleTitle)
      .replace('{{articleContent}}', articleContent);

    // Send email to each address using Promise.all to parallelize the email sending process
    const promises = emails.map((email) => {
      const mailOptions = {
        from: 'testing.acronym@gmail.com', // sender email address
        to: email, // recipient email address
        subject: 'New Article Published', // email subject
        html: mergedHTMLContent, // replace placeholder with article information
      };

      return transporter.sendMail(mailOptions);
    });

    // Await all the email sending promises
    const results = await Promise.all(promises);

    // Check for any failed email sends
    const failedSends = results.filter((result) => result.rejected.length > 0);
    if (failedSends.length > 0) {
      const failedRecipients = failedSends.map((result) => result.rejected.join(', '));
      logData('emailService.js', `Error sending emails to subscribers: Some emails failed to send to: ${failedRecipients}`);
      throw new Error('Error sending emails to subscribers');
    }

    // All emails sent successfully
    console.log('Emails sent successfully to subscribers');
  } catch (error) {
    logData('emailService.js', `Error sending emails to subscribers: ${error.message}`);
    throw error;
  }
};

// Export the sendEmailToSubscribers function to be used by other modules
module.exports = sendEmailToSubscribers;