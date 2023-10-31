<template>
	<div>
		<div class="sas">
			<div class="blue1">
				<section class="blue2">
					<h1 class="">
						Ponuka organických <br />
						a anorganicých hnojív
					</h1>
				</section>

				<aside class="blue3"><p class="">Sagrop spol. s r.o. ponúka a predáva priemyselné hnojivá – granulované aj kvapalné (LAD, DASA, Amofos, NPK, Močovina, DAM, SAM) – voľne uložené, BigBag balenie, v cisternách, 1000 l nádrže, ktorých ceny pravidelne aktualizujeme.</p></aside>
				<aside class="blue4"><p class="">Naša ponuka je rozšírená aj o špeciálne kvapalné a kryštalické hnojivá vo vode rozpustné rastové stimulátory a hnojivá používané v ekologickej poľnohospodárskej prvovýrobe. V predaji je sortiment špeciálnych hnojív od firiem YARA International, Agro Aliance SK, ASRA, Belba plus, AM Agro, Energen, MV Servis, Organix, Qenerika, Timac agro, Vermivital.</p></aside>
			</div>
		</div>
	</div>

	<div class="cont">
		<img class="ob1" src="/images/traktor.svg" alt="" />
		<img class="ob2" src="/images/zelen.svg" alt="" />
	</div>

	<div class="container3">
		<div class="right-text3">
			<p>Tieto firmy sú plne etablované v slovenskej poľno výrobe pri pestovaní hustosiatych obilnín (pšenica, jačmeň), kukurice, repky olejnej, cukrovej repy, špeciálnych plodín, vo vinohradoch a sadoch.</p>

			<p>Sortiment týchto firiem, ktoré zastupuje naša spoločnosť vám vieme zabezpečiť. Ich aplikáciu a cenovú kalkuláciu vám navrhnú naši obchodno-odborní zástupcovia. Základné ceny špeciálnych prípravkov, stimulantov a biopreparátov nájdete v našom cenníku, ktorý vám pošleme na vyžiadanie e-mailom alebo poskytneme pri osobnom stretnutí.</p>
		</div>
	</div>

	<div class="space"><GreenPart></GreenPart></div>

	<div class="blue1">
		<div class="top">
			<section class="blue2"><h1 class="heh">Cenník Eko Hnojív</h1></section>

			<aside class="blue3"><p class="">Resp. doprava vo vlastnej réžii je možná zo skladu spoločnosti Sagrop Šala , Dlhá nad Váhom 927 05</p></aside>
			<aside class="blue4"><p class="">Všetky produkty sú vhodné pre ekologické poľnohospodárstvo. K dispozícii je aj vo vode rozpustná humínová kyselina - CODAHUMUS S80</p></aside>
		</div>
	</div>

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

	<Footer class="space2"></Footer>
</template>

<script>
import Aktuality from "../components/Aktuality.vue"
import Footer from "../components/Footer.vue"
import GreenPart from "../components/GreenPart.vue"
import axios from "axios"

export default {
	components: {
		Aktuality,
		Footer,
		GreenPart,
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
@media (min-width: 1000px) {
	.space2 {
		padding-top: 18cm;
	}
}
@media (max-width: 1000px) {
	.space2 {
		margin-top: 6cm;
	}
}
@media (min-width: 1000px) {
	.space2 {
		margin-top: 12cm;
	}
}
@media (min-width: 1000px) and (max-width: 1300px) {
	.space2 {
		margin-top: 12cm;
	}
}
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
		margin-top: 190px;
		margin-left: 30px;
		cursor: pointer;
		margin-bottom: -4cm;
		height: 40px;

		border: none;
		border: none;
		color: white;
		background: #050402;
		border-radius: 30px;
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
}

.custom-table {
	margin: auto;
	width: 98%;
	height: 896px;
	overflow: hidden;

	border-spacing: 0;
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
	font-family: Recia;

}
th.first-header {
	border-top-left-radius: 20px;
}
th {
	background: #2c3714;
	font-size: 24px;
	font-weight: 600;
}
@media (max-width: 1000px) {
	.custom-table {
		margin: -4cm auto;
	}

	th {
		font-size: 15px;
		padding: 5px;
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
}
@media (max-width: 2000px) {
	td {
		font-size: 17px;

		font-family: Plus Jakarta Sans;
	}
}
@media (max-width: 1000px) {
	td {
		font-size: 12px;

		font-family: Plus Jakarta Sans;
	}
	
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

th.last-header {
	border-top-right-radius: 20px;
	background: #2c3714;
}

.custom-table thead {
	color: white;
}

.custom-table td {
	padding: 10px;
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

@media (max-width: 1100px) and (min-width: 1000px) {
	.space {
		padding-top: 2cm;
	}
}

@media (max-width: 1000px) {
	.space {
		margin-top: 2cm;
	}
}
@media (min-width: 1000px) {
	.space {
		margin-top: 12cm;
	}
}
@media (min-width: 1000px) and (max-width: 1300px) {
	.space {
		margin-top: 12cm;
	}
}

@media (min-width: 1410px) and (max-width: 2000px) {
	.cont {
		margin-top: -4cm;
	}
}

.blue1 {
	display: row;
	width: 100%;

	color: rgb(0, 0, 0);
	padding-top: 2.5cm;
}

.blue2 {
	height: 300px;
	width: 45%;
	display: table-cell;
	padding-left: 30px;
	font-family: "Recia";
	font-size: 48px;
	font-weight: 600;
}

/* .blue22{

    height: 300px;
    width: 30%;
    display: table-cell;
    padding-left: 20px;
    font-size: 48px;

  } */
.top {
	margin-top: -1cm;
	margin-bottom: 1cm;
}
.blue2 h2 {
	color: #2c3714;
	font-size: 38px;
}

.blue3 {
	height: 300px;
	width: 30%;
	display: table-cell;
	padding-right: 1cm;
	color: rgba(35, 25, 10, 0.8);
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: 0.225px;

	font-family: "Plus Jakarta Sans", sans-serif;
	font-size: 3em;
}
.blue4 {
	height: 300px;
	width: 30%;
	display: table-cell;
	padding-right: 30px;
	font-size: 3em;
	line-height: normal;
	font-weight: 300;
	font-family: "Plus Jakarta Sans", sans-serif;
	letter-spacing: 0.225px;
	color: rgba(35, 25, 10, 0.8);
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: 0.225px;
}

@media (max-width: 2000px) {
	.top {
		margin-top: -1cm;
		margin-bottom: -3cm;
	}
	.blue2 {
		height: 300px;
		width: 45%;
		display: table-cell;
		padding-left: 30px;

		font-size: 38px;
	}

	.blue3 {
		height: 300px;
		width: 30%;
		display: table-cell;
		padding-left: 10px;
		font-size: 20px;
	}
	.blue4 {
		height: 100px;
		width: 40%;
		padding-bottom: 200px;
		display: table-cell;
		padding-right: 30px;
		font-size: 20px;
	}
}

@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

@media (max-width: 1410px) {
	.blue2 {
		display: block;
		height: 100px;
		width: 90%;
		font-size: 3em;
	}

	.cont {
		margin-top: -4cm;
		margin-bottom: 0cm;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		max-width: 100%;

		gap: 5px;
	}

	.blue3 {
		display: block;
		height: 150px;
		width: 90%;
		padding-left: 30px;
		padding-top: 30px;
		font-size: 25px;
	}
	.blue4 {
		padding-top: 0px;
		padding-left: 30px;
		font-size: 25px;
	}
}

@media (max-width: 1000px) {
	br {
		display: none;
	}

	.heh {
		padding-top: 50px;

		font-size: 29px;
	}
	.top {
		margin-top: -2.6cm;
	}

	.blue1 {
		display: block;
	}
	.blue2 {
		display: block;
	
		width: auto;
		font-size: 29px;
		height: auto;
		padding-left: 16px;
	}
	

	.blue3 {
		display: block;
		height: auto;
		/* margin-top: 2cm; */
		width: auto;
		font-size: 20px;
		padding-left: 16px;
	}
	.blue4 {
		display: block;
		height: auto;
		width: auto;
		font-size: 20px;
		padding-left: 16px;
		padding-top: 20px;
	}
}

.container3 {
	width: 55%;
	font-family: "Plus Jakarta Sans", sans-serif;
	padding-top: 1.5cm;
	position: absolute;
	right: 0;
	color: rgba(35, 25, 10, 0.8);
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: 0.225px;
}

.right-text3 p {
	font-size: 29px;
	font-family: "Plus Jakarta Sans", sans-serif;
}

.right-text3 {
	padding-right: 20px;
	font-family: "Plus Jakarta Sans", sans-serif;
}

@media (max-width: 1267px) and (min-width: 1000px) {
	.container3 {
		width: 55%;
		font-family: "Plus Jakarta Sans", sans-serif;
		padding-top: 1cm;
		position: absolute;
		right: 0;
	}
	.right-text3 p {
		font-size: 20px;
		font-family: "Plus Jakarta Sans", sans-serif;
	}
}
@media (max-width: 2000px) {
	.right-text3 p {
		font-size: 20px;
		font-family: "Plus Jakarta Sans", sans-serif;
	}
}

@media (max-width: 1000px) {
	.Newsletter {
		margin-top: 6cm;
		padding-bottom: 7cm;
	}
	.container3 {
		width: 100%;
		position: static;

		margin-top: 3.5cm;
		height: 100%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		overflow: hidden;
	}

	.right-text3 {
		padding-left: 16px;
	}

	.right-text3 h1 {
		font-size: 38px;
	}
	.right-text3 p {
		font-size: 20px;
	}
}
.cont {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	max-width: 100%;

	gap: 20px;
}

@media (max-width: 1000px) {
	.ob1,
	.ob2 {
		max-width: 100%;
	}
	.cont {
		margin-top: -5cm;
		margin-bottom: -5cm;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		max-width: 100%;

		gap: 5px;
	}
}

.ob1 {
	border-radius: 20px;
	width: 43%;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
}

.ob2 {
	border-radius: 20px;
	width: 54%;
	height: auto;

	display: flex;
	justify-content: center;
	align-items: center;
}

@media (max-width: 1410px) {
	.ront {
		padding-top: 4cm;
	}
}
</style>
