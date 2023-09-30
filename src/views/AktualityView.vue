<template>
	<div>
		<section>
			<div class="blue1">
				<section class="blue2">
					<h1 class="">Aktuality</h1>
				</section>

				<aside class="blue3">
					<p class="">
						Tu nájdete informácie o nových produktových <br />
						radoch, najnovších projektoch a iných <br />
						zaujímavých veciach, ktoré sa u nás dejú. Naša <br />
						snaha je udržiavať vás v obraze a informovať o <br />
						všetkom, čo sa deje v našej spoločnosti.
					</p>
				</aside>
				<aside class="blue4">
					<p class="">
						Sledujte naše novinky a buďte informovaní o <br />
						všetkých dôležitých zmenách a aktualizáciách.
					</p>
				</aside>
			</div>
		</section>

		<div class="bar">
			<div class="search-bar">
				<svg class="icon-search" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
					<path d="M7.66634 13.9999C11.1641 13.9999 13.9997 11.1644 13.9997 7.66659C13.9997 4.16878 11.1641 1.33325 7.66634 1.33325C4.16854 1.33325 1.33301 4.16878 1.33301 7.66659C1.33301 11.1644 4.16854 13.9999 7.66634 13.9999Z" stroke="#3B3731" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M14.6663 14.6666L13.333 13.3333" stroke="#3B3731" stroke-linecap="round" stroke-linejoin="round" />
				</svg>

				<input class="search" type="text" v-model="searchText" placeholder="Hladat" />
			</div>

			<div class="spacer"></div>

			<div class="buttons">
				<button class="new" @click="sortByNewest">Najnovšie</button>
				<button class="old" @click="sortByOldest">Najstaršie</button>

				<!-- <div class="archive-dropdown">
					<div class="dropdown">
						<button @click="showArchiveDropdown = !showArchiveDropdown">
							<span>Archív</span>
							<svg class="archIcon" width="25px" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"></path>
							</svg>
						</button>
						<div v-if="showArchiveDropdown" class="dropdown-menu">
							<ul>
								<li v-for="option in archiveOptions" :key="option.label">
									<a @click="selectArchiveOption(option)">{{ option.label }}</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<span class="selected-option">{{ selectedArchiveOption }}</span> -->
			</div>
		</div>

		<div v-if="admin" class="admin-page">
			<form @submit.prevent="createArticle" class="form-container" ref="articleForm">
				<div class="drag-area" :class="{ active: isActive }" @dragover.prevent="onDragOver" @change="handleImageUpload" @dragleave="onDragLeave" ref="dragArea" @drop.prevent="onDrop">
					<svg class="brow" xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
						<path d="M26.833 3.83325H17.2497C7.66634 3.83325 3.83301 7.66659 3.83301 17.2499V28.7499C3.83301 38.3333 7.66634 42.1666 17.2497 42.1666" stroke="#A6A29D" stroke-width="2.875" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M42.166 19.1665V24.9165" stroke="#A6A29D" stroke-width="2.875" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M42.1663 19.1666H34.4997C28.7497 19.1666 26.833 17.2499 26.833 11.4999V3.83325L42.1663 19.1666Z" stroke="#A6A29D" stroke-width="2.875" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M26.3732 34.9986C21.8691 35.3244 21.8691 41.8411 26.3732 42.1669H37.0299C38.3141 42.1669 39.5791 41.6877 40.5182 40.8252C43.6807 38.0652 41.9941 32.5452 37.8349 32.0277C36.3399 23.0386 23.3449 26.4502 26.4116 35.0177" stroke="#A6A29D" stroke-width="2.875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
					<header v-text="dragText"></header>
					<div class="or">or<a class="browse" @click="browseFile"> browse </a></div>
					<input type="file" ref="fileInput" required hidden @change="handleImageUpload" />
				</div>
				<div class="input-container">
					<input class="input-line full-width" type="text" v-model="title" placeholder="Názov" required />
					<textarea rows="3" cols="20" class="input-line full-width spafe" v-model="description" placeholder="Popis" required maxlength="200" @input="updateCharacterCount"></textarea>
				</div>
				<button type="submit" @click="clearImage" :disabled="isUploading">{{ isUploading ? "Uploading..." : "Submit" }}</button>
				<!-- Image preview container -->
				<div class="image-preview" v-if="imageUrl">
					<h2 class="preview-text">Nahratý obrazok:</h2>
					<img :src="imageUrl" alt="Image Preview" />
				</div>
			</form>
		</div>

		<div class="container">
			<div class="box-container">
				<div class="box" v-for="(article, index) in paginatedArticles" :key="index">
					<!-- Display article content -->
					<div class="fww">
						<img class="fw1" :src="article.article_image_url" :alt="article.article_title" />
					</div>
					<h2 class="farg">{{ article.article_title }}</h2>
					<p class="parg" v-html="formatArticleContent(article.article_content)"></p>
					<div class="timestamp">{{ formatDate(article.article_publication) }}</div>
					<!-- Format and display timestamp -->
					<button class="delete-button" v-if="admin" @click="deleteArticle(article.id)">Vymazať</button>
				</div>
			</div>
		</div>

		<!-- Pagination -->
		<div class="pagination">
			<button @click="prevPage" :disabled="currentPage === 1" class="arrow-btn">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M10.0002 13.28L5.65355 8.9333C5.14022 8.41997 5.14022 7.57997 5.65355 7.06664L10.0002 2.71997" stroke="#050402" stroke-opacity="0.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</button>
			<span v-for="pageNumber in totalPages" :key="pageNumber">
				<button @click="changePage(pageNumber)" :class="{ active: pageNumber === currentPage }">
					<span class="page-number">{{ pageNumber }}</span>
					<span v-if="pageNumber === currentPage" class="page-dot"></span>
				</button>
			</span>
			<button @click="nextPage" :disabled="currentPage === totalPages" class="arrow-btn">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5.99978 2.72003L10.3464 7.0667C10.8598 7.58003 10.8598 8.42003 10.3464 8.93336L5.99978 13.28" stroke="#050402" stroke-opacity="0.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</button>
		</div>

		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha384-cV5lumV66EPpxFsNmR5P5K5J6pxzrIMjFgaBzZSUO2Fm2z4MWf0ykInI2P4FffA2" crossorigin="anonymous" />
	</div>

	<Footer class="space"></Footer>
</template>

<script>
import axios from "axios"
import Footer from "../components/Footer.vue"
import DOMPurify from "dompurify"
import validUrl from "valid-url"

export default {
	components: { Footer },
	data() {
		return {
			title: "",
			admin: false,
			articles: [],
			image: null,
			imageUrl: "",
			description: "",
			showArchiveDropdown: false,
			selectedArchiveOption: "",
			draggedFile: null,
			searchText: "",
			articlesPerPage: 12,
			currentPage: 1,
			isActive: false,
			isUploading: false,
			dragText: "Drop files to upload",
			config: {},
			validExtensions: ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/svg+xml"],
			filename: "AktualityView.vue",
			apiUrl: null,
			draggedImageURL: null,

			imageHasBeenDragged: false,
		}
	},
	async created() {
		this.apiUrl = import.meta.env.VITE_API_ENDPOINT
		this.checkAdmin()
		this.loadArticlesFromBackend()
	},
	computed: {
		remainingCharacters() {
			return 200 - this.description.length
		},
	},

	methods: {
		updateCharacterCount() {
			// Calculate the remaining characters by subtracting the current character count from the maximum limit (200)
			const remainingCharacters = 200 - this.description.length

			// Update the data property that holds the remaining character count
			this.remainingCharacters = remainingCharacters
		},

		/**
		 * Simulates an error and logs it to the backend using Axios.
		 * @param {Error} error - The error object to be logged to the backend.
		 */
		async logErrorToBackend(error) {
			try {
				const loggerEndpoint = `${this.apiUrl}/log`
				const logData = { source: this.filename, message: error.message }

				// Send the error log to the backend using Axios
				axios.post(loggerEndpoint, logData).catch((error) => {
					console.error("Error logging to backend:", error)
				})

				// You can also display the error message to the user or handle it as needed
				console.error("Caught error:", error.message)
			} catch (error) {
				console.error("Error logging to backend:", error)
			}
		},
		// clearImage() {
		// 	this.$refs.dragArea.innerHTML = "Drop files to upload" // Clear the contents of the div
		// },

		/**
		 * Check the user's admin status.
		 * @returns {Promise<void>} - A Promise that resolves after checking the admin status or rejects on error.
		 */
		async checkAdmin() {
			try {
				const token = localStorage.getItem("token")
				const response = await axios.get(`${this.apiUrl}/check-admin`, {
					headers: { Authorization: token },
				})
				this.admin = response.data.isAdmin
			} catch (error) {
				this.logErrorToBackend(error)
			}
		},

		/**
		 * Load articles from the backend API.
		 * @returns {Promise<void>} - A Promise that resolves after loading the articles or rejects on error.
		 */
		async loadArticlesFromBackend() {
			try {
				const response = await axios.get(`${this.apiUrl}/articles`)
				this.articles = response.data || [] // If response.data is null, set articles to an empty array
			} catch (error) {
				this.logErrorToBackend(error)
			}
		},

		/**
		 * Handle image upload when the user selects an image.
		 * @param {Event} event - The input change event containing the selected image file.
		 */
		async handleImageUpload(event) {
			const file = event.target.files[0]

			// Check if the selected file is an image
			if (!this.validExtensions.includes(file.type)) {
				this.logErrorToBackend(`Invalid file type. Please select an image file (jpeg, jpg, png, gif, svg).`)
				return
			}

			try {
				const formData = new FormData()
				formData.append("image", file)

				this.isUploading = true // Set uploading status to true
				const response = await axios.post(`${this.apiUrl}/upload-image`, formData, {
					headers: {
						"Content-Type": "multipart/form-data",
						Authorization: localStorage.getItem("token"),
					},
				})

				this.isUploading = false // Reset uploading status
				this.imageUrl = response.data.imageUrl
			} catch (error) {
				// Log the error message to the console
				console.error("Error uploading image:", error.message)
				this.logErrorToBackend(error)
			}
		},

		/**
		 * Formats article content with hyperlinks.
		 * Replaces URLs with HTML links and validates URLs.
		 *
		 * @param {string} content - The original content of the article.
		 * @returns {string} The formatted content with hyperlinks.
		 */
		formatArticleContent(content) {
			try {
				const sanitizedContent = DOMPurify.sanitize(content)

				const urlPattern = /((?:https?:\/\/|www\.)\S+)/g
				const linkedContent = sanitizedContent.replace(urlPattern, (match) => {
					const sanitizedUrl = this.validateAndSanitizeUrl(match)
					return `<a href="${sanitizedUrl}" target="_blank">${match}</a>`
				})

				return linkedContent
			} catch (error) {
				this.logErrorToBackend(error)
				return content
			}
		},

		/**
		 * Sanitizes user input to prevent potential security vulnerabilities.
		 *
		 * @param {string} input - The user input to be sanitized.
		 * @returns {string} The sanitized input.
		 */
		sanitizeInput(input) {
			return DOMPurify.sanitize(input)
		},

		/**
		 * Validates and sanitizes a URL to prevent security vulnerabilities.
		 *
		 * @param {string} url - The URL to be validated and sanitized.
		 * @returns {string} The validated and sanitized URL.
		 */
		validateAndSanitizeUrl(url) {
			const sanitizedUrl = validUrl.isUri(url)
			if (!sanitizedUrl) {
				return "" // Return an empty string for invalid URLs
			}
			return DOMPurify.sanitize(sanitizedUrl)
		},

		/**
		 * Create a new article by sending a POST request to the backend API.
		 * @returns {Promise<void>} - A Promise that resolves after creating the article or rejects on error.
		 */
		async createArticle() {
			try {
				if (!this.articles) {
					this.articles = [] // Initialize the articles array as an empty array if it's null
				}

				if (this.imageHasBeenDragged) {
					// Create a FormData object and append the dragged file
					const formData = new FormData()
					formData.append("image", this.draggedFile)

					// Upload the image first and get the image URL
					this.isUploading = true
					const response = await axios.post(`${this.apiUrl}/upload-image`, formData, {
						headers: {
							"Content-Type": "multipart/form-data",
							Authorization: localStorage.getItem("token"),
						},
					})
					this.isUploading = false
					this.imageUrl = response.data.imageUrl
				}

				// Create the article with the image URL
				const newArticleData = {
					articleTitle: this.title,
					articleContent: this.description,
					articlePublication: new Date().toISOString(),
					articleImageUrl: this.imageUrl,
				}

				const articleResponse = await axios.post(`${this.apiUrl}/articles`, newArticleData, {
					headers: {
						Authorization: localStorage.getItem("token"),
					},
				})

				if (articleResponse.status === 201 || articleResponse.status === 200) {
					const newArticle = articleResponse.data
					if (this.articles.length === 0) {
						this.articles.push(newArticle) // Add the new article at the end of the array if it's empty
					} else {
						this.articles.unshift(newArticle) // Add the new article at the beginning of the array
					}
					// Reset the form data
					this.resetForm()

					// Send email to subscribers about the new article (enable on production)
					await this.sendArticleEmail(newArticleData.articleTitle, newArticleData.articleContent, newArticleData.articleImageUrl)

					// Reload the articles from the backend to reflect the updated list
					await this.loadArticlesFromBackend()
				} else {
					throw new Error("Failed to create article.")
				}
			} catch (error) {
				// Handle error
				this.logErrorToBackend(error)
			}
		},

		/**
		 * Send email to subscribers about a new article being published.
		 * @param {string} articleTitle - The title of the new article.
		 * @param {string} articleContent - The content of the new article.
		 * @param {string} articleImageUrl - The URL of the new article image.
		 * @returns {Promise<void>} - A Promise that resolves after sending the email or rejects on error.
		 */
		async sendArticleEmail(articleTitle, articleContent, articleImageUrl) {
			try {
				const ArticleData = {
					articleTitle: articleTitle,
					articleContent: articleContent,
					articleImageUrl: articleImageUrl,
				}

				await axios.post(`${this.apiUrl}/send-article-email`, ArticleData, {
					headers: {
						Authorization: localStorage.getItem("token"),
					},
				})
			} catch (error) {
				// Handle error and log the failure
				this.logErrorToBackend(error)
				console.error("Error sending article email:", error)
			}
		},

		formatDate(timestamp) {
			const date = new Date(timestamp)
			return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
		},

		/**
		 * Delete an article by sending a DELETE request to the backend API.
		 * @param {number} id - The ID of the article to delete.
		 * @returns {Promise<void>} - A Promise that resolves after deleting the article or rejects on error.
		 */
		async deleteArticle(id) {
			try {
				await axios.delete(`${this.apiUrl}/articles/${id}`, {
					headers: {
						Authorization: localStorage.getItem("token"),
					},
				})

				// Remove the article from the local articles array
				this.articles = this.articles.filter((article) => article.id !== id)

				// Reload the articles from the backend to reflect the updated list
				await this.loadArticlesFromBackend()
			} catch (error) {
				this.logErrorToBackend(error)
			}
		},

		browseFile() {
			this.$refs.fileInput.click()
		},

		onDragOver(event) {
			event.preventDefault()
			this.isActive = true
			this.dragText = "Release to Upload File"
		},

		onDragLeave() {
			this.isActive = false
			this.dragText = "Drop files to upload"
		},

		onDrop(event) {
			this.draggedFile = event.dataTransfer.files[0]
			this.showFile()
			this.imageUrl = URL.createObjectURL(this.draggedFile)
			this.imageHasBeenDragged = true
		},
		resetDragArea() {
			this.draggedImageURL = null
			// Reset the input field value
			this.$refs.fileInput.value = ""
		},

		showFile() {
			const that = this // Store a reference to the current component instance

			if (this.validExtensions.includes(this.draggedFile.type)) {
				const fileReader = new FileReader()
				fileReader.onload = function () {
					const fileURL = fileReader.result
					const imgTag = `<img src="${fileURL}" alt="image" style="width: 300px; height:300px;  border-radius: 17px;">`

					// Access the component instance using 'that' and update the HTML
					that.$refs.dragArea.innerHTML = imgTag
				}
				fileReader.readAsDataURL(this.draggedFile)
			} else {
				alert("This is not an Image File!")
				this.isActive = false
				this.dragText = "Drag & Drop to Upload File"
			}
		},
		sortByOldest() {
			try {
				this.filteredArticles.sort((a, b) => new Date(a.article_publication) - new Date(b.article_publication))
				this.currentPage = 1 // Reset current page to the first page after sorting
			} catch (error) {
				this.logErrorToBackend(error)
			}
		},

		sortByNewest() {
			try {
				this.filteredArticles.sort((a, b) => new Date(b.article_publication) - new Date(a.article_publication))
				this.currentPage = 1 // Reset current page to the first page after sorting
			} catch (error) {
				this.logErrorToBackend(error)
			}
		},

		selectArchiveOption(option) {
			this.selectedArchiveOption = option.label
			this.showArchiveDropdown = false
		},

		resetForm() {
			this.title = ""
			this.image = null
			this.imageUrl = ""
			this.description = ""
			const fileInput = this.$refs.fileInput
			if (fileInput) fileInput.value = ""
		},

		changePage(pageNumber) {
			this.currentPage = pageNumber
		},

		prevPage() {
			if (this.currentPage > 1) {
				this.currentPage--
			}
		},

		nextPage() {
			if (this.currentPage < this.totalPages) {
				this.currentPage++
			}
		},
	},

	computed: {
		// filteredArticles() {
		// 	try {
		// 		const searchText = this.searchText.toLowerCase().trim()
		// 		if (!searchText) {
		// 			return this.articles
		// 		} else {
		// 			return this.articles.filter((article) => {
		// 				const titleMatch = article?.articleTitle?.toLowerCase().includes(searchText)
		// 				const contentMatch = article?.articleContent?.toLowerCase().includes(searchText)
		// 				return titleMatch || contentMatch
		// 			})
		// 		}
		// 	} catch (error) {
		// 		this.logErrorToBackend(error)
		// 		return []
		// 	}
		// },
		imageSrc() {
			return this.draggedImageURL || "" // Use the URL of the selected image
		},

		filteredArticles() {
			const searchText = this.searchText.toLowerCase().trim()
			if (!searchText) {
				return this.articles
			} else {
				const filtered = this.articles.filter((article) => {
					const titleMatch = article.article_title.toLowerCase().includes(searchText)
					const contentMatch = article.article_content.toLowerCase().includes(searchText)
					return titleMatch || contentMatch
				})
				console.log("Filtered Articles:", filtered) // Add this line for debugging
				return filtered
			}
		},
		archiveOptions() {
			try {
				const options = []
				const currentDate = new Date()
				const currentYear = currentDate.getFullYear()
				const currentMonth = currentDate.getMonth() + 1

				for (let year = currentYear; year >= 2016; year--) {
					for (let month = 12; month >= 1; month--) {
						options.push({
							year,
							month,
							label: `${year}-${month.toString().padStart(2, "0")}`,
						})

						if (year === currentYear && month === currentMonth) {
							break
						}
					}
				}
				return options
			} catch (error) {
				this.logErrorToBackend(error)
				return []
			}
		},
		paginatedArticles() {
			try {
				const startIndex = (this.currentPage - 1) * this.articlesPerPage
				const endIndex = startIndex + this.articlesPerPage
				return this.filteredArticles.slice(startIndex, endIndex).map((article) => ({ ...article }))
			} catch (error) {
				this.logErrorToBackend(error)
				return []
			}
		},
		totalPages() {
			try {
				return Math.ceil(this.filteredArticles.length / this.articlesPerPage)
			} catch (error) {
				this.logErrorToBackend(error)
				return 0
			}
		},
	},
}
</script>

<style scoped>
.gradient-overlay {
	border-radius: 20px;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.36) 50%);
}
.space {
	margin-top: 27cm;
}

.timestamp {
	font-size: 14px; /* Adjust the font size as needed */
	color: #999;

	margin-bottom: 0px;
	text-align: right; /* Align the timestamp to the right */
}

.image-preview img {
	max-width: 100%;
	max-height: 200px; /* Adjust the max height as needed */
	border: dotted 1px black;
	border-radius: 20px;
}

.pagination {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	border: none;
	font-family: "Plus Jakarta Sans";
}

.pagination button {
	background-color: none;
	border: none;
	padding: 8px 12px;
	margin: 0 2px;
	cursor: pointer;
	border: none;
	color: #333;
	background: none;
	transition: background-color 0.3s ease;
}

.pagination button:hover {
	background-color: none;
}

.pagination button:disabled {
	opacity: 0.5;
	cursor: not-allowed;
	background: none;
}

.pagination .active {
	background-color: transparent;
	color: rgb(0, 0, 0);
}

.pagination .active:hover {
	background-color: none;
	opacity: 0.8;
}

/* Additional styles for arrow buttons */
.arrow-btn {
	font-size: 18px;
	width: 40px;
	background: none;
	border: none;
}

.or {
	font-size: 17px;
}
.browse {
	text-decoration: underline;
	font-size: 17px;
	color: var(--green, #2c3714);
	font-family: "Plus Jakarta Sans";
	font-style: normal;
	font-weight: 600;
	line-height: 32px; /* 188.235% */
	letter-spacing: 0.255px;
	cursor: pointer;
}

.icon-search {
	display: flex;
	position: absolute;
	margin-top: 17px;
	margin-left: 11px;
}

.page-dot {
	display: block;
	width: 4px;
	height: 4px;
	margin: 4px auto 0;
	border-radius: 50%;
	background-color: #3b3731; /* Adjust the color as needed */
}

@media (max-width: 1000px) {
	.image-preview {
		margin-top: 10px;
		text-align: center;
		margin-left: 400px;
		border: solid 2px black;
		display: none;
	}

	.preview-text {
		display: none;
	}
	.parg {
		max-width: 100%;
	}
	.delete-button {
		border: solid 1px black;

		background: transparent;
		font-size: 13px;
		border-radius: 19px;
		cursor: pointer;
		padding: 7px 20px;
	}
	.or {
		font-size: 17px;
	}
	.dropdown span {
		display: none;
	}
	.archIcon {
		display: block;
	}
	.brow {
		width: 30px;
	}

	.drag-area header {
		display: none;
	}
	.drag-area span {
		display: none;
	}

	.drag-area img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-radius: 20px;
	}
}
.fww {
	position: relative;
	overflow: hidden;
}

.fww img {
	width: auto;
	height: auto;
	display: block;
}

.fww::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 20px;
	background: linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.36) 100%);
	opacity: 0.7; /* Adjust the opacity as needed */
	z-index: 1;
}
@media (min-width: 1000px) {
	.image-preview {
		margin-top: 10px;
		text-align: center;
		margin-left: 400px;
	}
	.preview-text {
		display: block;
		font-family: Plus jakarta sans;
		font-size: 20px;
	}
	.delete-button {
		border: solid 1px black;

		background: transparent;
		font-size: 13px;
		border-radius: 19px;
		cursor: pointer;
		padding: 7px 20px;
	}
	.parg {
		max-width: auto;
	}
	.farg {
		max-width: auto;
	}

	.dropdown span {
		display: block;
	}

	.archIcon {
		display: none;
	}
	.drag-area {
		border: 2px dashed rgba(5, 4, 2, 0.4);
		height: 303px;
		width: 303px;
		border-radius: 20px;
		font-family: "Plus Jakarta Sans";
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.drag-area.active {
		border: 2px solid black;
	}
	.drag-area .icon {
		font-size: 100px;
		color: black;
	}
	.drag-area header {
		font-size: 17px;
		font-weight: 500;
		color: black;
		margin-top: 1cm;
	}
	.drag-area span {
		font-size: 15px;
		font-weight: 500;
		color: black;
		margin: 10px 0 15px 0;
	}

	.drag-area button {
		padding: 10px 25px;
		font-size: 20px;
		font-weight: 500;
		border: none;
		outline: none;
		background: black;
		color: #5256ad;
		border-radius: 5px;
		cursor: pointer;
	}
	.drag-area img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-radius: 20px;
	}
}

* {
	box-sizing: border-box;
}
.input-container {
	display: flex;
	flex-direction: column;
	padding-top: 20px;

	padding-left: 50px;
}

input {
	border: transparent;
}

::-webkit-input-placeholder .input-line:focus + ::input-placeholder {
	color: #fff;
}

.highlight {
	color: rgba(255, 255, 255, 0.8);
	font-weight: 400;
	cursor: pointer;
	transition: color 0.2s ease;
}

.highlight:hover {
	color: #fff;
	transition: color 0.2s ease;
}

.form-container {
	display: flex;
	flex-direction: row; /* Set the form to be stacked vertically */
}


@media (min-width: 1000px) {
	#up {
		line-height: 140px;
	}

	.trash {
		margin-left: 14cm;
	}
}

@media (max-width: 999px) {
	#up {
		line-height: 40px;
	}

	.trash {
		display: flex;
		justify-content: flex-end; /* Aligns the icon to the right end */
		margin-left: 9cm;
		align-items: center; /* To center items vertically if needed */
	}
}

.spacing {
	-webkit-box-flex: 1;
	-webkit-flex-grow: 1;
	-ms-flex-positive: 1;
	flex-grow: 1;

	text-align: center;
	color: rgba(5, 4, 2, 0.8);
	text-align: center;
	font-size: 14px;
	font-family: "Plus Jakarta Sans";
	font-style: normal;
	font-weight: 500;
	line-height: 22px;
}

.input-line:focus {
	outline: none;
	border-color: black;
	-webkit-transition: all 0.2s ease;
	transition: all 0.2s ease;
}

.ghost-round {
	cursor: pointer;
	background: none;
	border: none;
	background: black;
	border-radius: 25px;
	color: var(--white, #e9e5e0);
	-webkit-align-self: flex-end;
	-ms-flex-item-align: end;
	align-self: flex-end;
	font-size: 14px;

	font-family: "Plus Jakarta Sans";
	font-style: normal;
	font-weight: 300;
	line-height: 2.8em;
	margin-top: 25px;
	margin-bottom: 25px;
	-webkit-transition: all 0.2s ease;
	transition: all 0.2s ease;
}

.ghost-round:hover {
	-webkit-transition: all 0.2s ease;
	transition: all 0.2s ease;
}
.search::placeholder {
	padding-left: 1px;

	color: rgba(15, 11, 5, 0.4);
	font-family: "Plus Jakarta Sans";
	font-size: 13px;
}

.search {
	display: grid;
	place-items: start;
	align-self: start;
	margin-top: 8px;
	align-content: start;
	justify-content: start;
	text-indent: 10px;
}

.boost-round {
	cursor: pointer;
	background: none;
	border: none;
	background: transparent;
	border-radius: 25px;

	border: solid 1px black;

	font-style: normal;
	font-weight: 500;
	line-height: 22px;
	color: rgba(5, 4, 2, 0.8);
	-webkit-align-self: flex-end;
	-ms-flex-item-align: end;
	align-self: flex-end;
	font-size: 14px;

	font-family: "Plus Jakarta Sans";
	font-style: normal;
	font-weight: 300;
	line-height: 2.8em;
	margin-top: 25px;
	margin-bottom: 25px;
	-webkit-transition: all 0.2s ease;
	transition: all 0.2s ease;
}
.spafe {
	margin-top: 50px;
}
.input-line {
	background: none;
	margin-bottom: 10px;
	line-height: 2.9em;
	color: rgba(5, 4, 2, 0.4);
	resize: none;
	border: none; /* Remove the default border */
	border-bottom: 1px solid #000; /* Add a border-bottom */
	background-color: transparent; /* Make the textarea background transparent */

	font-weight: 300;
	letter-spacing: 0px;
	letter-spacing: 0.02rem;
	font-size: 19px;
	font-size: 1.2rem;
	font-family: "Plus Jakarta Sans";
	border-bottom: 1px rgba(5, 4, 2, 0.4) solid;
	-webkit-transition: all 0.2s ease;
	transition: all 0.2s ease;
}
@media (min-width: 1000px) {
	.full-width {
		width: 362px;
	}
}

@media (max-width: 1000px) {
	.full-width {
		width: 160px;
	}
}

/* CSS for the layout */
.bar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
}

.search-bar {
	flex: 1; /* Take up remaining space */
}

.spacer {
	flex: 1; /* Take up remaining space */
}

.buttons {
	display: flex;
	align-items: center;
	margin-right: 18px;
	gap: 14px;
}

/* Add your existing button styles here */

.old {
	place-items: center;
	display: flex;
	border: solid 1px black;
	background: transparent;
	border-radius: 19px;
	cursor: pointer;
	padding: 9px 20px;
}

.new {
	display: flex;
	justify-content: flex-end;
	right: 8cm;
	border: solid 1px black;
	background: transparent;
	font-size: 13px;
	border-radius: 19px;
	cursor: pointer;
	padding: 9px 20px;
}
.custom-file-label {
	background-color: transparent;
	width: 303px;
	height: 303px;

	border-radius: 20px;
	border: 1px dashed rgba(5, 4, 2, 0.4);
	cursor: pointer;
	display: inline-block;
}

.admin-page {
	padding-top: 67px;
	justify-content: start;
	place-items: center;
	display: flex;
	color: rgb(0, 0, 0);
	padding-left: 20px;

	margin: 0 auto;
}

.admin-page h1 {
	color: #ffffff;
	font-size: 40px;
	margin-right: 4cm;
}

@media (min-width: 1000px) {
	.admin-page button {
		background: rgb(0, 0, 0);
		color: rgb(255, 255, 255);
		border: none;
		place-items: start;
		place-content: start;
		justify-content: start;
		align-self: end;
		justify-content: start;
		font-family: "Plus Jakarta Sans";
		font-size: 14px;
		border-radius: 20px;
		width: 100px;
		height: 40px;
		margin-left: -363px;
		cursor: pointer;
	}

	.dropdown button {
		background: transparent;
		border: 1px solid black;
		border-radius: 20px;
		padding: 10px 30px;
		margin-right: 20px;
	}
}
@media (max-width: 1000px) {
	.admin-page button {
		background: rgb(0, 0, 0);
		color: rgb(255, 255, 255);
		border: none;
		font-family: "Plus Jakarta Sans";
		font-size: 14px;
		border-radius: 20px;
		width: 80px;
		height: 40px;
		position: absolute;
		margin-top: 3cm;
		margin-left: -10px;
		cursor: pointer;
	}
}

.fw1 {
	border-radius: 20px;
	width: 100px;
	height: 320px;
	object-fit: cover;
}

.fw1 {
	position: relative;
	overflow: hidden;
}

.fw1 img {
	width: 100%;
	height: auto;
	display: block;
}

.fw1::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.36) 100%), lightgray 50% / cover no-repeat;
	opacity: 40%; /* Adjust the opacity as needed */
	z-index: 1;
}

.container {
	display: flex;
	font-family: "Plus Jakarta Sans";
	margin-top: 2cm;
	justify-content: center;
}
@media (min-width: 2000px) {
	.container .box-container {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 20px;
		
	}
}

/* For screens larger than or equal to 1000px but less than 2000px */
@media (min-width: 1000px) and (max-width: 1999px) {
	.container .box-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
	}
}

@media (min-width: 1000px) and (max-width: 1299px) {
	.container .box-container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 20px;
	}
}
/* For screens smaller than 1000px */
@media (max-width: 999px) {
	.container .box-container {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 20px;
	}
	.box h2 {
	font-size: 18px;
	font-weight: 600;
	word-wrap: break-word;
	max-width: 360px;

}

.box p {
	font-size: 15px;
	font-weight: 500;
	word-wrap: break-word;
	max-width: 360px;
}
}

.container .box-container .box {
	border-radius: 5px;
	margin-left: 20px;
	margin-right: 20px;
	text-align: start;
}

.box {
	line-height: 19px;
	max-width: 800px;
	word-wrap: break-word;

}

.box h2 {
	font-size: 18px;
	font-weight: 600;
	word-wrap: break-word;
	max-width: 420px;

}

.box p {
	font-size: 15px;
	font-weight: 500;
	word-wrap: break-word;
	max-width: 420px;
}

.box a {
	font-size: 15px;
	font-weight: 600;
	color: #2c3714;
}


.container .box-container .box {
  /* Set the width and height for the image container */
  max-width: 580px; /* Adjust to your desired width */
	
  /* Add border-radius for rounded corners */
  border-radius: 20px;
}

.container .box-container .box img {
  /* Ensure the image maintains its aspect ratio and fills the container */
  width: 100%;
  height: auto;
  object-fit: cover;
}
.blue1 {
	display: table;
	width: 100%;
	padding-top: 3cm;
	color: rgb(0, 0, 0);
}

.blue2 {
	height: 300px;
	width: 40%;
	display: table-cell;
	padding-left: 30px;
	color: #050402;
	font-family: "Recia";
	font-style: normal;
	font-weight: 600;
	font-size: 48px;
}

.blue3 {
	height: 300px;
	width: 30%;
	display: table-cell;
	font-family: "Plus Jakarta Sans";
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: 0.225px;
	padding-right: 20px;
	color: rgba(35, 25, 10, 0.8);
	font-size: 28px;
}
.blue3 br {
	display: none;
}

.blue4 {
	height: 300px;
	width: 30%;
	display: table-cell;
	font-family: "Plus Jakarta Sans";
	font-style: normal;
	font-weight: 500;
	padding-right: 20px;
	line-height: normal;
	letter-spacing: 0.225px;
	color: rgba(35, 25, 10, 0.8);
	font-size: 28px;
}
@media (max-width: 1000px) {
	.container .box-container .box {
  /* Set the width and height for the image container */
  min-width: 100px; /* Adjust to your desired width */

  /* Add border-radius for rounded corners */
  border-radius: 20px;
}

}

@media (max-width: 1600px) {
	.container .box-container .box {
  /* Set the width and height for the image container */
  max-width: 450px; /* Adjust to your desired width */

  /* Add border-radius for rounded corners */
  border-radius: 20px;
}
.box p {
	font-size: 15px;
	font-weight: 500;
	word-wrap: break-word;
	max-width: 320px;
}

.box h2 {
	font-size: 18px;
	font-weight: 600;
	word-wrap: break-word;
	max-width: 320px;

}}
@media (max-width: 2000px) {
	.container .box-container .box {
  /* Set the width and height for the image container */
  max-width: auto; /* Adjust to your desired width */

  /* Add border-radius for rounded corners */
  border-radius: 20px;
}
	.blue1 {
		padding-top: 2.4cm;
	}
	.blue2 {
		height: 300px;
		width: 40%;
		display: table-cell;
		padding-left: 30px;
		color: #050402;
		font-family: "Recia";

		font-size: 40px;
	}
	.blue3 br {
		display: none;
	}
	.blue3 {
		height: 300px;
		width: 30%;
		display: table-cell;

		font-size: 20px;
	}
	.blue4 {
		height: 300px;
		width: 30%;
		display: table-cell;
		padding-right: 20px;
		font-size: 20px;
	}

	.blue4 br {
		display: none;
	}
}

@media (max-width: 1410px) {
	.blue2 {
		display: block;
		height: 300px;
		width: 100%;
		font-size: 6em;
	}

	.blue3 {
		display: block;
		height: 150px;
		width: 100%;
		padding-left: 30px;
		font-size: 21px;
	}
	.blue4 {
		padding-left: 60px 10;
		padding-right: 30px;
		font-size: 21px;
	}

	.blue4 br {
		display: none;
	}
}

@media (max-width: 1000px) {
	.blue1 {
		display: block;
	}
	.dropdown button {
		background: transparent;
		border: none;
		border-radius: 20px;
		padding: 5px 10px;
		margin-right: 20px;
	}

	.search-bar input {
		flex: 1;
		place-content: start;
		width: 93px;
		padding: 9px 20px;
		border: 1px solid #000;
		border-radius: 20px;
		outline: none;
		background: #f4f0eb;
	}

	.blue2 {
		display: block;
		height: auto;
		width: auto;
		font-size: 31px;

		padding-right: 30px;
		padding-left: 30px;
	}
	.blue3 br {
		display: none;
	}
	.blue1 br {
		display: none;
	}
	.blue3 {
		display: block;
		height: auto;
		width: auto;

		font-size: 20px;
		padding-left: 30px;
		padding-right: 30px;
	}
	.blue4 {
		display: block;
		height: auto;
		width: auto;
		font-size: 20px;
		padding-left: 30px;
		padding-right: 30px;
	}
}

.search-bar {
	display: block;
	align-items: start;
	margin-bottom: 10px;
	margin-left: 20px;

	place-content: start;
}

.search-bar input {
	flex: 1;
	place-content: start;
	padding: 9px 20px;
	border: 1px solid #000;
	border-radius: 20px;
	outline: none;
	background: #f4f0eb;
}

.archive-dropdown {
	display: flex;
	align-items: center;
}

.dropdown {
	position: relative;
}

.dropdown-menu {
	position: absolute;
	background-color: #fff;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	padding: 10px;
	top: 30px;
	left: 0;
	z-index: 1;
}

.dropdown-menu ul {
	list-style: none;
	padding: 0;
	margin: 0;
}

.dropdown-menu li {
	margin-bottom: 5px;
}

.dropdown-menu a {
	display: block;
	padding: 5px;
	border-radius: 5px;
	text-decoration: none;
	color: #000;
	cursor: pointer;
}

.dropdown-menu a:hover {
	background-color: #f1f1f1;
}

.selected-option {
	margin-left: 10px;
	font-weight: bold;
}
</style>
