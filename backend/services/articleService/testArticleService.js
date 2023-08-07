const path = require('path');

const { saveArticle, getArticle, updateArticle, deleteArticle } = require('./articleService');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

/**
 * A function to save multiple articles.
 * @param {string} articleTitle - The title of the article.
 * @param {string} articleContent - The content of the article.
 * @param {string} [articleImageUrl] - The URL of the article image (optional).
 * @returns {Promise<void>} - A Promise that resolves after saving the articles or rejects on error.
 * @throws {Error} - If there's an error saving the articles.
 */
const saveMultipleArticles = async (articleTitle, articleContent, articlePublication, articleImageUrl, count) => {
  try {
    for (let i = 0; i < count; i++) {
      
      await saveArticle(articleTitle, `${articleContent} ${i + 1}`, articlePublication, articleImageUrl);
    }
  } catch (error) {
    console.error('Error saving articles:', error.message);
    throw new Error('Error saving articles');
  }
};

/**
 * A function to test all article-related functions (saveArticle, getArticle, updateArticle, deleteArticle).
 * @returns {Promise<void>} - A Promise that resolves after running all tests or rejects on error.
 */
async function testArticleFunctions() {
  try {
    // Step 1: Test saveArticle function with a sample article
    const articleTitle = 'Test Article Title';
    const articleContent = 'This is a sample article content.';
    const articlePublication = new Date().toISOString();
    const articleImageUrl = 'http://www.snut.fr/wp-content/uploads/2015/08/image-de-paysage.jpg'; // Replace with the actual image URL
    await saveMultipleArticles(articleTitle, articleContent, articlePublication, articleImageUrl, 6);
    console.log('Articles saved successfully.');

    // Step 2: Test getArticle function with ID to retrieve the saved article
    const savedArticle = await getArticle(1);
    console.log('Article retrieved by ID:', savedArticle);

    // Step 3: Test getArticle function without ID to retrieve all articles
    const allArticles = await getArticle();
    console.log('All articles:', allArticles);

    // Verify that all articles are an array and contain the saved article
    if (!Array.isArray(allArticles) || allArticles.length === 0 || !allArticles.some(article => article.id === 1)) {
      throw new Error('All articles not retrieved or saved article not found in the result.');
    }

    // Step 4: Test updateArticle function to update the saved article
    const updatedTitle = 'Updated Article Title';
    const updatedContent = 'This is the updated article content.';
    await updateArticle(5, updatedTitle, updatedContent, articlePublication, articleImageUrl); // Update the article image URL as well
    console.log('Article updated successfully.');

    // Step 5: Test getArticle function to retrieve the updated article
    const updatedArticle = await getArticle(5);
    console.log('Updated article retrieved by ID:', updatedArticle);

    // Verify that the retrieved article has the updated title, content, and image URL
    if (!updatedArticle || updatedArticle.article_title !== updatedTitle || updatedArticle.article_content !== updatedContent || updatedArticle.article_image_url !== articleImageUrl) {
      throw new Error('Article not updated or the updated data is incorrect.');
    }

    // Step 6: Test deleteArticle function to delete the saved article
    await deleteArticle(2);
    console.log('Article deleted successfully.');

    // Step 7: Test getArticle function to verify that the article is deleted
    const deletedArticle = await getArticle(1);
    console.log('Deleted article retrieved by ID:', deletedArticle);

    console.log('All tests passed successfully.');
  } catch (error) {
    console.error('Error during testing:', error.message);
  }
}

// Run the test function
testArticleFunctions();