// Import the sendEmailToSubscribers function from the emailService.js file
const sendEmailToSubscribers = require('./emailService');

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

/**
 * A function to test sending a custom email to all subscribers.
 * @returns {Promise<void>} - A Promise that resolves after sending the test email or rejects on error.
 */
async function testSendEmail() {
  try {
    // Simulate the article title and content (Replace with actual data from your application)
    const articleTitle = 'Test Article Title';
    const articleContent = '<h1>Test Article Content</h1><p>This is a test article content.</p>';

    // Call the sendEmailToSubscribers function with the article title and content
    await sendEmailToSubscribers(articleTitle, articleContent);

    console.log('Test email sent successfully');
  } catch (error) {
    console.error('Error sending test email:', error.message);
  }
}

// Run the test function
testSendEmail();