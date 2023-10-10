<template>
	<div>
		<!-- Blue section with title and description -->
		<section class="blue1">
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
		</section>
		<router-link to="/aktuality"> <button class="bttna">Zobrazit Viac</button></router-link>
		<!-- Article section -->
		<div class="ront">
			<div class="" v-for="(article, index) in displayedArticles" :key="index">
				<div class="pon">
					<router-link to="/aktuality">

					<div class="gradient-overlay"></div>

					<p class="ponep">{{ article.article_title }}</p>
					<p class="poneep">{{ article.article_content }}</p>
					<router-link to="aktuality">
						<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="49.9411" height="49.9411" rx="24.9706" fill="#E9E5E0" />
							<path d="M30.9812 27.5444L30.9812 18.9601L22.3969 18.9601" stroke="#050402" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M18.84 31.1011L30.8609 19.0803" stroke="#050402" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</router-link>
					<img class="fw1" :src="article.article_image_url" :alt="article.article_title" />
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios"

export default {
	data() {
		return {
			articles: [], // Array to store fetched articles
			maxDisplayedArticles: 2, // Maximum number of articles to display
			apiUrl: null,
		}
	},
	created() {
		this.apiUrl = import.meta.env.VITE_API_ENDPOINT
		this.fetchArticles()
	},
	methods: {
		/**
		 * Log an error to the backend and handle it.
		 * @param {Error} error - The error object to be logged to the backend.
		 */
		async logErrorToBackend(error) {
			await this.loadConfig()
			try {
				const loggerEndpoint = `${this.apiUrl}/log`
				const logData = { source: this.$options.name, message: error.message }

				// Send the error log to the backend using Axios
				axios.post(loggerEndpoint, logData).catch((error) => {
					console.error("Error logging to backend:", error)
				})

				// Display the error message to the user or handle it as needed
				console.error("Caught error:", error.message)
			} catch (error) {
				console.error("Error logging to backend:", error)
			}
		},

		/**
		 * Load configuration data from the backend API.
		 * @returns {Promise<void>} - A Promise that resolves after loading the configuration data or rejects on error.
		 */
		async loadConfig() {
			try {
				const response = await axios.get(`${this.apiUrl}/config`)
				this.config = response.data || {}
			} catch (error) {
				this.logErrorToBackend(error)
			}
		},

		/**
		 * Fetch articles from the API.
		 */
		async fetchArticles() {
			await this.loadConfig()
			try {
				const response = await axios.get(`${this.apiUrl}/articles`)
				this.articles = response.data || [] // If response.data is null, set articles to an empty array
			} catch (error) {
				this.logErrorToBackend(error) // Log and handle the error
			}
		},
	},
	computed: {
		/**
		 * Get the articles to be displayed in the grid.
		 * @returns {Array} - Array of articles to display.
		 */
		displayedArticles() {
			return this.articles.slice(0, this.maxDisplayedArticles)
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
	height: 99.6%;
	background: linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.36) 50%);
}
@media (min-width: 1000px) {
	.space {
		padding-top: 30cm;
	}
}

@media (max-width: 1000px) {
	.space {
		padding-top: 2cm;
	}
}

@media (max-width: 1000px) {
	.bttna {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 10px 30px;
		margin-top: -3cm;
		cursor: pointer;
		position: absolute;

		height: 40px;
		right: 2cm;
		border: none;
		border: none;
		color: white;
		background: #050402;
		border-radius: 30px;
	}
}
.fw1,
.fw2,
.fw3,
.fw4 {
	width: 100%;
	height: 400px; /* Set the desired fixed height */
	border-radius: 20px;
	object-fit: cover; /* Maintain aspect ratio and fill container */
}

.blue1 br {
	display: none;
}

@media (min-width: 1000px) {
	.bttna {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 24px 30px;
		margin-top: -2cm;
		cursor: pointer;
		position: absolute;

		height: 40px;
		right: 2cm;
		border: none;
		border: none;
		color: white;
		background: #050402;
		border-radius: 30px;
	}
}
@media (max-width: 1410px) {
	.ront {
		padding-top: 4cm;
	}
}

@media (min-width: 1000px) {
	.ront {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin: 0 auto;
		width: 100%;

		font-family: "Recia";
		gap: 20px;
		margin-top: 2cm;
		max-width: 100%;
	}

	.pon {
		justify-content: center;

		position: relative;
		display: inline-block;
		width: 100%;
		height: auto;
		/* tu sa dava prva vrsta */
	}

	.ponep {
		position: absolute;
		display: flex;
		color: var(--white, #e9e5e0);
		margin-left: 30px;

		font-family: Plus jakarta sans;

		font-style: normal;
		font-weight: 600;
		line-height: normal;
		margin-right: 20px;
		font-size: 28px; /* Adjust as needed */
		font-weight: 600; /* Adjust as needed */
	}
	.tpop {
		position: absolute;
		display: flex;
		color: white;
		font-family: plus jakarta sans;
		margin-left: 20px;
		margin-right: 20px;
		font-size: 38px; /* Adjust as needed */
		font-weight: 600; /* Adjust as needed */
	}

	.pon svg {
		position: absolute;
		right: 20px;
		bottom: 20px;
	}
	.pon svg:hover {
		scale: 1.2;
		transition: ease-in-out 0.2s;
		opacity: 0.8;
	}
	.poneep {
		position: absolute;
		display: flex;
		
		margin-left: 20px;
		bottom: 0;
		
		padding-right: 80px;
		font-size: 20px; /* Adjust as needed */
		font-weight: 500;
		color: var(--white, #e9e5e0);

		/* Body text/white */
		font-family: Plus Jakarta Sans;

		line-height: normal;
		letter-spacing: 0.225px;
	}
	.tpoop {
		position: absolute;
		display: flex;

		margin-left: 20px;
		bottom: 0;
		font-size: 30px; /* Adjust as needed */
		font-weight: 500;
		color: var(--white, #e9e5e0);

		/* Body text/white */
		font-family: Plus Jakarta Sans;

		line-height: normal;
		letter-spacing: 0.225px;
	}

	.fw1,
	.fw2,
	.fw3,
	.fw4 {
		max-width: auto;
		min-height: 700px;

		border-radius: 20px;
	}

	.ront > div {
		flex-basis: 48.4%;
		width: 100%;
		display: flex;

		place-content: center;
	}
}
@media (max-width: 2200px) {
	.fw1,
	.fw2,
	.fw3,
	.fw4 {
		max-width: auto;
		min-height: 600px;

		border-radius: 20px;
	}
}
@media (max-width: 2000px) {
	.fw1,
	.fw2,
	.fw3,
	.fw4 {
		max-width: auto;
		min-height: 500px;

		border-radius: 20px;
	}
}
@media (max-width: 1600px) {
	.fw1,
	.fw2,
	.fw3,
	.fw4 {
		max-width: auto;
		min-height: 300px;

		border-radius: 20px;
	}
}
@media (max-width: 1900px) and (min-width: 1000px) {
	.poneep {
		position: absolute;
		display: flex;

		margin-left: 20px;
		bottom: 0;

		font-size: 20px;
		font-weight: 500;
		color: var(--white, #e9e5e0);

		/* Body text/white */
		font-family: Plus Jakarta Sans;

		line-height: normal;
		letter-spacing: 0.225px;
	}
	.tpoop {
		position: absolute;
		display: flex;
		width: 300px;
		margin-left: 20px;
		bottom: 0;
		font-size: 20px;
		font-weight: 500;
		padding-right: 0px;
		color: var(--white, #e9e5e0);

		/* Body text/white */
		font-family: Plus Jakarta Sans;

		line-height: normal;
		letter-spacing: 0.225px;
	}
}

@media (max-width: 1000px) {
	.ront > div {
		flex-basis: 100%;
	}

	.pon {
		justify-content: center;

		position: relative;
		display: inline-block;
		width: 100%;
	}

	.ponep {
		position: absolute;
		display: flex;
		color: white;
		margin-left: 20px;
		font-size: 18px; /* Adjust as needed */
		font-weight: 600; /* Adjust as needed */
		font-family: Recia;
	}
	.tpop {
		position: absolute;
		display: flex;
		color: white;
		margin-left: 20px;

		font-size: 24px; /* Adjust as needed */
		font-weight: 600; /* Adjust as needed */
	}

	.pon svg {
		position: absolute;
		right: 20px;
		bottom: 20px;
	}

	.poneep {
		position: absolute;
		display: flex;
		color: white;
		margin-left: 20px;
		bottom: 0;
		
		padding-right: 80px;
		font-size: 16px; /* Adjust as needed */
		font-weight: 500; /* Adjust as needed */
		font-family: Plus jakarta sans;
	}
	.tpoop {
		position: absolute;
		display: flex;
		width: 300px;
		color: white;
		margin-left: 20px;
		bottom: 0;
		font-family: Plus jakarta sans;
		font-size: 17px; /* Adjust as needed */
		font-weight: 500; /* Adjust as needed */
	}
	.ront {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin: 0 auto;
		width: 97%;
		gap: 10px;
		margin-top: -6cm;
		max-width: 100%;
		font-family: "Recia";
	}

	.fw1,
	.fw2,
	.fw3,
	.fw4 {
		width: 100%;
		border-radius: 20px;
	}
}
.pon {
    /* ... your existing styles ... */
    position: relative;
    display: inline-block;
    width: 100%;
    height: auto;
    overflow: hidden; /* Add this to hide overflowing content */
}

.ponep {
    /* ... your existing styles ... */
    max-width: 100%;
}

.poneep {
    /* ... your existing styles ... */
    max-width: 100%;
    word-wrap: break-word;
}

@media (max-width: 2000px) {
	.blue1 {
		display: table;
		width: 100%;

		color: rgb(0, 0, 0);
		padding-top: 1cm;
	}

	.ponep {
		position: absolute;
		display: flex;
		color: white;
		
		margin-left: 20px;
		margin-right: 20px;
		font-size: 22px; /* Adjust as needed */
		font-weight: 600; /* Adjust as needed */
		font-family: Plus Jakarta Sans;
	}
	.tpop {
		font-family: Plus Jakarta Sans;
		position: absolute;
		display: flex;
		color: white;
		margin-left: 20px;
		margin-right: 20px;
		font-size: 30px; /* Adjust as needed */
		font-weight: 600; /* Adjust as needed */
	}
}

@media (min-width: 1000px) {
	.blue1 {
		display: table;
		width: 100%;
		margin-top: 1cm;
		padding-bottom: 1cm;
		margin-bottom: 1cm;
		color: rgb(0, 0, 0);
	}

	.blue2 {
		height: 300px;
		width: 40%;
		font-family: Recia;
		display: table-cell;
		padding-left: 30px;
		padding-right: 20px;
		font-size: 50px;
	}

	/* .blue22{

    height: 300px;
    width: 30%;
    display: table-cell;
    padding-left: 20px;
    font-size: 48px;

  } */

	.blue2 h2 {
		color: #2c3714;
		font-size: 38px;
	}

	.blue3 {
		height: 300px;
		width: 30%;
		display: table-cell;
		padding-right: 60px;
		font-family: "Plus Jakarta Sans";
		color: rgba(35, 25, 10, 0.8);
		font-size: 3em;
	}
	.blue4 {
		height: 300px;
		width: 30%;
		display: table-cell;
		color: rgba(35, 25, 10, 0.8);
		padding-right: 60px;
		font-size: 3em;
		font-family: "Plus Jakarta Sans";
	}
}
@media (max-width: 2000px) {
	.blue2 {
		height: 300px;
		width: 40%;
		display: table-cell;
		padding-left: 40px;

		font-size: 38px;
	}
	.blue1 {
		margin-bottom: -2cm;
	}
	.blue3 {
		height: 300px;
		width: 30%;
		display: table-cell;
		padding-left: 20px;
		padding-right: 60px;
		font-size: 20px;
	}
	.blue4 {
		height: 100px;
		width: 40%;
		padding-bottom: 200px;
		margin-top: 88px;
		padding-right: 2px;
		font-size: 20px;
		padding-right: 20px;
	}
}

@media (max-width: 1410px) {
	.blue2 {
		display: block;
		margin-left: -17px;
		height: 200px;
		width: 100%;
		font-size: 5em;
	}
	.blue1 {
		margin-bottom: -cm;
		padding-top: cm;
	}

	.blue3 {
		display: block;
		height: 150px;
		width: 90%;
		padding-left: 20px;
		padding-top: 30px;
		font-size: 21px;
	}
	.blue4 {
		padding-top: 40px;
		padding-left: 20px;
		font-size: 21px;
	}
}

@media (max-width: 1000px) {
	@media (min-width: 1000px) {
		.ront2 {
			display: flex;
			flex-direction: row;
			justify-content: center;
			gap: 20px;
			margin: 0 auto;
			max-width: 98%;
			padding-top: 2cm;
		}

		.ron {
			justify-content: center;

			position: relative;
			display: inline-block;
			width: 80%;
			margin-top: 2cm;
		}

		.ron img {
			width: 100%;
			height: auto;
			justify-content: center;
			display: flex;
			flex-direction: row;
		}

		.onep {
			position: absolute;
			display: flex;
			color: white;
			margin-left: 20px;
			font-size: 30px; /* Adjust as needed */
			font-weight: 600; /* Adjust as needed */
		}
		.twop {
			position: absolute;
			display: flex;
			color: white;
			margin-left: 20px;

			font-size: 30px; /* Adjust as needed */
			font-weight: 600; /* Adjust as needed */
		}

		.ron svg {
			position: absolute;
			right: 20px;
			bottom: 20px;
		}

		.oneep {
			position: absolute;
			display: flex;
			color: white;
			margin-left: 20px;
			bottom: 0;
			width: 300px;

			font-size: 24px; /* Adjust as needed */
			font-weight: 500; /* Adjust as needed */
		}
		.twoop {
			position: absolute;
			display: flex;
			color: white;
			margin-left: 20px;
			bottom: 0;
			width: 200px;
			font-size: 24px; /* Adjust as needed */
			font-weight: 500; /* Adjust as needed */
		}

		.fw11,
		.fw22 {
			flex-basis: calc(48% - 20px); /* Tu sa meni ta velkost imgs */
			border-radius: 20px;
			max-width: 100%;
			height: auto;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	@media (max-width: 1150px) {
		.ponep {
			position: absolute;
			display: flex;
			color: white;
			margin-left: 20px;
			margin-right: 20px;
			font-size: 21px; /* Adjust as needed */
			font-weight: 600; /* Adjust as needed */
			font-family: Plus Jakarta Sans;
		}
		.tpop {
			font-family: Plus Jakarta Sans;
			position: absolute;
			display: flex;
			color: white;
			margin-left: 20px;
			margin-right: 20px;
			font-size: 21px; /* Adjust as needed */
			font-weight: 600; /* Adjust as needed */
		}
		.oneep {
			width: 300px;
		}
		.twoop {
			width: 300px;
		}
		.oneep {
			font-size: 24px;
			width: 400px;
		}
		.twoop {
			font-size: 24px;
			width: 400px;
		}
	}
	@media (max-width: 1500px) {
		.onep {
			font-size: 30px;
		}
		.twop {
			font-size: 30px;
		}
		.ront2 {
			display: flex;
			flex-direction: row;
			justify-content: center;

			margin: 0 auto;

			padding-top: 2cm;
		}
		.oneep {
			font-size: 24px;
			width: 400px;
		}
		.twoop {
			font-size: 24px;
			width: 400px;
		}
		.ron {
			justify-content: center;
			display: table-row;

			width: 100%;
			margin-top: 2cm;
		}

		.ron img {
			width: 100%;
			height: auto;
			justify-content: center;
			display: flex;
			flex-direction: row;
		}
		.fw11,
		.fw22 {
			border-radius: 20px;
		}
	}

	/* Add media query for responsive layout */
	@media (max-width: 1000px) {
		.ront2 {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: 0px;
			padding-top: 2cm;
			margin-bottom: 0;
		}

		.ron {
			justify-content: center;

			position: relative;
			display: inline-block;
			width: 100%;
		}
		.fw11,
		.fw22 {
			flex-basis: 100%; /* Full width on smaller screens */
			display: table;
			max-width: 98%;
			margin: 0 auto;
		}

		.onep {
			font-size: 30px;
			position: absolute;
			color: white;
			font-weight: 600;
			left: 20px;
		}
		.twop {
			font-size: 30px;
			position: absolute;
			color: white;
			font-weight: 600;
			left: 20px;
		}
		.ron svg {
			position: absolute;
			right: 14px;
			bottom: 10px;
		}

		.oneep {
			position: absolute;
			display: flex;
			color: white;
			margin-left: 20px;
			bottom: 0;
			width: 330px;
			font-size: 17px; /* Adjust as needed */
			font-weight: 500; /* Adjust as needed */
		}
		.twoop {
			position: absolute;
			display: flex;
			color: white;
			margin-left: 20px;
			bottom: 0;
			width: 330px;
			font-size: 17px; /* Adjust as needed */
			font-weight: 500; /* Adjust as needed */
		}
	}

	br {
		display: none;
	}

	.blue1 {
		display: block;
	}
	.blue2 {
		display: block;
		height: 40px;
		width: auto;
		font-size: 30px;
	}

	.blue3 {
		display: block;
		height: 140px;
		width: auto;
		font-size: 20px;
		padding-left: 20px;

		font-family: "Plus Jakarta Sans";
	}
	.blue4 {
		display: block;
		height: auto;
		width: auto;
		font-size: 20px;
		padding-left: 20px;
		font-family: "Plus Jakarta Sans";
		padding-top: 20px;
	}
}
</style>
