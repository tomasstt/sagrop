<template>
	<div>
		<!-- Display a table with commodities -->
		<table class="custom-table">
			<thead>
				<tr>
					<th class="first-header">Komodity</th>
					<th>Dopyt</th>
					<th>Ponuka</th>
					<th>Cena</th>
					<th>Množstvo</th>
					<th>Termín</th>
					<th class="last-header">Parita</th>
				</tr>
			</thead>
			<tbody>
				<!-- Loop through commodities to display in the table -->
				<tr v-for="(commodity, index) in commodities" :key="index">
					<!-- Display commodity name column -->
					<td class="cell1" :class="{ 'lastf-cell': index === commodities.length - 1 }">
						<span v-if="!admin">{{ commodity.name }}</span>
						<input v-else v-model="commodity.name" class="effect-2" type="text" />
						<span class="focus-border">
							<i></i>
						</span>
					</td>
					<!-- Display commodity inquiry column -->
					<td>
						<span v-if="!admin">{{ commodity.inquiry }}</span>

						<input v-else v-model="commodity.inquiry" class="effect-2" type="text" />
						<span class="focus-border">
							<i></i>
						</span>
					</td>
					<!-- Display commodity offer column -->
					<td>
						<span v-if="!admin">{{ commodity.offer }}</span>
						<input v-else v-model="commodity.offer" class="effect-2" type="text" />
						<span class="focus-border">
							<i></i>
						</span>
					</td>
					<!-- Display commodity price column -->
					<td>
						<span v-if="!admin">{{ commodity.price }}</span>
						<input v-else v-model="commodity.price" class="effect-2" type="text" />
						<span class="focus-border">
							<i></i>
						</span>
					</td>
					<!-- Display commodity amount column -->
					<td>
						<span v-if="!admin">{{ commodity.amount }}</span>
						<input v-else v-model="commodity.amount" class="effect-2" type="text" />
						<span class="focus-border">
							<i></i>
						</span>
					</td>
					<!-- Display commodity date column -->
					<td>
						<span v-if="!admin">{{ commodity.date }}</span>
						<input v-else v-model="commodity.date" class="effect-2" type="text" />
						<span class="focus-border">
							<i></i>
						</span>
					</td>
					<!-- Display commodity parita column -->
					<td class="cell7" :class="{ 'lasts-cell': index === commodities.length - 1 }">
						<span v-if="!admin">{{ commodity.parita }}</span>
						<input v-else v-model="commodity.parita" class="effect-2" type="text" />
						<span class="focus-border">
							<i></i>
						</span>
					</td>
				</tr>
			</tbody>
		</table>

		<!-- Show the "Save" button only for admin users -->
		<button class="bttna" v-if="admin" @click="saveCommodities">Uložiť</button>

		<!-- Include the Aktuality component to display other data -->
		<Aktuality></Aktuality>
		<Footer class="space"></Footer>
	</div>
</template>

<script>
import Aktuality from "../components/Aktuality.vue"
import Footer from "../components/Footer.vue"
import axios from "axios"

export default {
	components: {
		Aktuality,
		Footer,
	},
	data() {
		return {
			admin: false,
			commodities: [
				{
					name: " ",
					inquiry: " ",
					offer: " ",
					price: " ",
					amount: " ",
					date: " ",
					parita: " ",
				},
				{
					name: " ",
					inquiry: " ",
					offer: " ",
					price: " ",
					amount: " ",
					date: " ",
					parita: " ",
				},
				{
					name: " ",
					inquiry: " ",
					offer: " ",
					price: " ",
					amount: " ",
					date: " ",
					parita: " ",
				},
				{
					name: " ",
					inquiry: " ",
					offer: " ",
					price: " ",
					amount: " ",
					date: " ",
					parita: " ",
				},
				{
					name: " ",
					inquiry: " ",
					offer: " ",
					price: " ",
					amount: " ",
					date: " ",
					parita: " ",
				},
				{
					name: " ",
					inquiry: " ",
					offer: " ",
					price: " ",
					amount: " ",
					date: " ",
					parita: " ",
				},
				{
					name: " ",
					inquiry: " ",
					offer: " ",
					price: " ",
					amount: " ",
					date: " ",
					parita: " ",
				},
				{
					name: " ",
					inquiry: " ",
					offer: " ",
					price: " ",
					amount: " ",
					date: "",
					parita: " ",
				},
			],
			apiUrl: null,
		}
	},
	created() {
		this.apiUrl = import.meta.env.VITE_API_ENDPOINT
		this.checkAdmin()
		this.loadCommodities()
	},

	methods: {
		/**
		 * Check the user's admin status.
		 * @returns {Promise<void>} - A Promise that resolves after checking the admin status or rejects on error.
		 */
		async checkAdmin() {
			try {
				const token = localStorage.getItem("token")

				const response = await axios.get(`${this.apiUrl}/check-admin`, {
					headers: {
						"Content-Type": "multipart/form-data",
						Authorization: localStorage.getItem("token"),
					},
				})
				this.admin = response.data.isAdmin
			} catch (error) {
				console.error("Error checking admin status:", error.message)
			}
		},

		/**
		 * Load commodities from the backend API.
		 * @returns {Promise<void>} - A Promise that resolves after loading the commodities or rejects on error.
		 */
		async loadCommodities() {
			try {
				const response = await axios.get(`${this.apiUrl}/commodities`)
				this.commodities = response.data
			} catch (error) {
				console.error("Error loading commodities from backend:", error.message)
			}
		},

		/**
		 * Save or update the commodities in the database.
		 * @returns {Promise<void>} - A Promise that resolves after saving or updating the commodities or rejects on error.
		 */
		async saveCommodities() {
			try {
				// Iterate through each commodity and save/update it individually
				for (const commodity of this.commodities) {
					// Check if the commodity has an ID
					if (commodity.id) {
						// If the commodity has an ID, it means it already exists in the database, so update it
						await axios.put(`${this.apiUrl}/commodities/${commodity.id}`, commodity, {
							headers: {
								Authorization: localStorage.getItem("token"),
							},
						})
						console.log(commodity)
					} else {
						// If the commodity does not have an ID, it is a new commodity, so save it as a new entry in the database
						await axios.post(`${this.config.apiUrl}/commodities`, commodity, {
							headers: {
								Authorization: localStorage.getItem("token"),
							},
						})
					}
				}
			} catch (error) {
				console.error("Error saving commodities:", error.message)
			}
		},
	},
}
</script>

<style scoped>
input {
	padding: 10px;
	border-radius: 10px;
	border: 0;
	box-shadow: 0 0 30px 4px rgba(0, 0, 0, 0.06);
	font-family: Plus jakarta sans;
	width: 60%;
}

@media (max-width: 1000px) {
	.bttna {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 10px 30px;
		margin-top: 30px;
		margin-left: 30px;
		cursor: pointer;

		height: 40px;

		border: none;
		border: none;
		color: white;
		background: #050402;
		border-radius: 30px;
	}
	.space {
		padding-top: 2cm;
	}
	.custom-table {
	/* position: absolute;
  top: 4cm;
  left: 3cm; */
	padding-top: 3cm;
	margin: auto;
	width: 98%;
	height: 896px;
	overflow: hidden;
	border-spacing: 0;
}
}

.blue1 br {
	display: none;
}

@media (min-width: 1000px) {
	.bttna {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 30px;
		margin-left: 30px;
		padding: 24px 30px;

		cursor: pointer;

		height: 40px;
		border: none;
		border: none;
		color: white;
		background: #050402;
		border-radius: 30px;
	}
	.space {
		padding-top: 29cm;
	}
	.custom-table {
	/* position: absolute;
  top: 4cm;
  left: 3cm; */
	padding-top: 5cm;
	margin: auto;
	width: 98%;
	height: 896px;
	overflow: hidden;
	border-spacing: 0;
}
}


.lastf-cell {
	border-bottom-left-radius: 20px;
}
.lasts-cell {
	border-bottom-right-radius: 20px;
}

.cell1 {
	place-content: start;
	justify-content: start;
}
th {
	min-width: 20px;
	height: 90px;
	padding: 5px;
	font-family: Recia;
}

th.first-header {
	border-top-left-radius: 20px;
}
@media (max-width: 1000px) {
	th {
		background: #2c3714;
		font-size: 17px;
		font-weight: 400;
	}
	.custom-table td {
	padding: 1px;
	text-align: center;
	border-bottom: 1px solid #87837d;
	border-right: 1px solid #87837d;
}

}
@media (max-width: 600px) {
	th {
		background: #2c3714;
		font-size: 12px;

		font-weight: 400;
	}
	.custom-table td {
	padding: 1px;
	text-align: center;
	border-bottom: 1px solid #87837d;
	border-right: 1px solid #87837d;
}

}
@media (max-width: 435px) {
	th {
		background: #2c3714;

		font-size: 8px;
		height: 40px;
		font-weight: 400;
	}
	.custom-table td {
	padding: 1px;
	text-align: center;
	border-bottom: 1px solid #87837d;
	border-right: 1px solid #87837d;
}

}
@media (max-width: 305px) {
	th {
		background: #2c3714;

		font-size: 7px;
		font-weight: 400;
	}
	.custom-table td {
	padding: 2px;
	text-align: center;
	border-bottom: 1px solid #87837d;
	border-right: 1px solid #87837d;
}

}

@media (min-width: 1000px) {
	th {
		background: #2c3714;
		font-size: 24px;
		font-weight: 600;
	}
	td {
		font-size: 20px;
		max-width: 10px;
		font-family: Plus Jakarta Sans;
	}
	.custom-table td {
	padding: 10px;
	text-align: center;
	border-bottom: 1px solid #87837d;
	border-right: 1px solid #87837d;
}

}
@media (max-width: 2000px) {
	td {
		font-size: 17px;

		font-family: Plus Jakarta Sans;
	}
	.custom-table td {
	padding: 10px;
	text-align: center;
	border-bottom: 1px solid #87837d;
	border-right: 1px solid #87837d;
}

}
@media (max-width: 1000px) {
	td {
		font-size: 12px;

		font-family: Plus Jakarta Sans;
	}
	.custom-table td {
	padding: 10px;
	text-align: center;
	border-bottom: 1px solid #87837d;
	border-right: 1px solid #87837d;
}

}
th.last-header {
	border-top-right-radius: 20px;
	background: #2c3714;
}

.custom-table thead {
	color: white;
}


	.custom-table td {
	padding: 0px;
	text-align: center;
	border-bottom: 1px solid #87837d;
	border-right: 1px solid #87837d;
}



.custom-table th:first-child,
.custom-table td:first-child {
	border-left: 1;
	border-left: 1px solid #87837d;
}

.custom-table th:last-child,
.custom-table td:last-child {
	border-right: 1;
	border-right: 1px solid #87837d;
}

.custom-table tr:first-child th,
.custom-table tr:first-child td {
	border-top: 1;
}

.custom-table tr:last-child th,
.custom-table tr:last-child td {
	border-bottom: 1;
}

/* Additional styles for the green header */
.custom-table th.first-header {
	background: #2c3714;
}
</style>
