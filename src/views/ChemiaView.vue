<template>
	<div>
		<div class="blue1">
			<section class="blue2"><h1 class="">Chémia</h1></section>

			<aside class="blue3"><p class="">Naša ponuka zahŕňa širokú škálu herbicídov, insekticídov, fungicídov a ďalších chemikálií na ochranu a podporu rastu rastlín. Sme hrdí na to, že všetky naše výrobky sú starostlivo vybrané a testované, aby zaručili maximálnu účinnosť a bezpečnosť pre vaše plodiny a životné prostredie.</p></aside>
			<aside class="blue4"><p class="">Snažíme sa neustále zlepšovať naše výrobky a služby, aby splnili potreby našich zákazníkov. Ak hľadáte spoľahlivého partnera pre vaše poľnohospodárske alebo lesné podnikanie, neváhajte nás kontaktovať. Tešíme sa na spoluprácu s vami!</p></aside>
		</div>
	</div>

	<div class="cont">
		<img class="ob1" src="/images/chemia2.svg" alt="" />
		<img class="ob2" src="/images/chemia1.svg" alt="" />
	</div>

	<div class="container3">
		<div class="right-text3">
			<p>Tieto firmy sú plne etablované v slovenskej poľno výrobe pri pestovaní hustosiatych obilnín (pšenica, jačmeň), kukurice, repky olejnej, cukrovej repy, špeciálnych plodín, vo vinohradoch a sadoch.</p>

			<p>Sortiment týchto firiem, ktoré zastupuje naša spoločnosť vám vieme zabezpečiť. Ich aplikáciu a cenovú kalkuláciu vám navrhnú naši obchodno-odborní zástupcovia. Základné ceny špeciálnych prípravkov, stimulantov a biopreparátov nájdete v našom cenníku, ktorý vám pošleme na vyžiadanie e-mailom alebo poskytneme pri osobnom stretnutí.</p>
		</div>
	</div>

	<div class="space"><Footer></Footer></div>
	<!-- <div class="space"> <GreenPart></GreenPart></div> -->
</template>

<script>
import GreenPart from "../components/GreenPart.vue"
import Footer from "../components/Footer.vue"
export default {
	components: { GreenPart, Footer },
}
</script>

<style scoped>
@media (max-width: 1000px) {
	.space {
		margin-top: 3cm;
	}
}
@media (min-width: 1000px) {
	.space {
		margin-top: 40cm;
	}
}
@media (min-width: 1000px) and (max-width: 1300px) {
	.space {
		margin-top: 40cm;
	}
}
@media (min-width: 1410px) and (max-width: 2000px) {
	.cont {
		margin-top: -4cm;
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
	padding-top: 2.9cm;
}

.blue2 {
	height: 300px;
	width: 42.6%;
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

.blue2 h2 {
	color: #2c3714;
	font-size: 38px;
}

.blue3 {
	height: 300px;
	width: 30%;
	display: table-cell;
	padding-right: 1cm;
	font-weight: 300;
	line-height: normal;
	letter-spacing: 0.225px;
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
	color: rgba(35, 25, 10, 0.8);

	font-weight: 500;
	font-family: "Plus Jakarta Sans", sans-serif;
	letter-spacing: 0.225px;
}

@media (max-width: 2000px) {
	.blue2 {
		height: 300px;
		width: 42.5%;
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
		color: rgba(35, 25, 10, 0.8);

		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: 0.225px;
	}
	.blue4 {
		height: 100px;
		width: 40%;
		padding-bottom: 200px;
		display: table-cell;
		padding-right: 30px;
		font-size: 20px;
		color: rgba(35, 25, 10, 0.8);

		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: 0.225px;
	}
}

@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

@media (max-width: 1410px) {
	.blue2 {
		display: block;
		height: 90px;
		width: 90%;
		font-size: 4em;
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

	.blue1 {
		display: block;
	}
	.blue2 {
		display: block;
		height: auto;
		width: auto;
		font-size: 23px;

		padding-left: 16px;
	}

	.blue3 {
		display: block;
		height: auto;
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
	width: 56.5%;
	font-family: "Plus Jakarta Sans", sans-serif;
	padding-top: 2cm;
	padding-right: 20px;
	position: absolute;
	right: 0;
}

@media (min-width: 1000px) {
	.right-text3 p {
		font-size: 29px;
		font-family: "Plus Jakarta Sans", sans-serif;
		color: rgba(35, 25, 10, 0.8);

		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: 0.225px;
	}
}

@media (max-width: 2000px) {
	.right-text3 p {
		font-size: 20px;
		font-family: "Plus Jakarta Sans", sans-serif;
		color: rgba(35, 25, 10, 0.8);

		margin-left: 10px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: 0.225px;
	}
}
.right-text3 {
	padding-right: 20px;
	font-family: "Plus Jakarta Sans", sans-serif;
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
	width: 40%;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
}

.ob2 {
	border-radius: 20px;
	width: 56%;
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
