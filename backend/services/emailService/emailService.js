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

const fs = require("fs")
const path = require("path")
const nodemailer = require("nodemailer")

const { getAllEmailAddresses } = require("../../db")
const { logData, logServiceError } = require("../../logging/logger")

require("dotenv").config({ path: path.resolve(__dirname, "../../.env") })

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
		const emails = await getAllEmailAddresses()

		// Validate email addresses
		if (emails.length === 0) {
			logData("emailService.js", "No email addresses found in the mailing list")
			return
		}

		// Read the custom email content from the file
		const customHTMLContent = fs.readFileSync(path.join(__dirname, "emailContent.html"), "utf8")

		// Configure email transporter
		const transporter = nodemailer.createTransport({
			service: "Gmail", // e.g., 'Gmail' or 'Outlook'
			auth: {
				user: process.env.EMAIL_USER, // your email address
				pass: process.env.EMAIL_PASSWORD, // your email password or app password
			},
		})

		// Replace placeholders with article information in the HTML content
		const mergedHTMLContent = customHTMLContent.replace("{{articleTitle}}", articleTitle).replace("{{articleContent}}", articleContent)

		// Send email to each address using Promise.all to parallelize the email sending process
		const promises = emails.map(async (email) => {
			const mailOptions = {
				from: process.env.EMAIL_USER, // sender email address
				to: email, // recipient email address
				subject: "New Article Published", // email subject
				html: mergedHTMLContent, // replace placeholder with article information
			}

			try {
				await transporter.sendMail(mailOptions)
				logData("emailService.js", `Email sent successfully to: ${email}`)
			} catch (error) {
				logServiceError("emailService.js", `Error sending email to: ${email}, Error: ${error.message}`)
				throw new Error(`Error sending email to: ${email}`)
			}
		})

		// Await all the email sending promises
		await Promise.all(promises)

		// All emails sent successfully
		logData("emailService.js", "Emails sent to all subscribers")
	} catch (error) {
		logData("emailService.js", `Error sending emails to subscribers: ${error.message}`)
		throw error
	}
}

// Export the sendEmailToSubscribers function to be used by other modules
module.exports = {
	sendEmailToSubscribers,
}
