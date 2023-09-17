import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import SluzbyView from "../views/SluzbyView.vue"
import SignUpView from "../views/SignUpView.vue"
import KomodityView from "../views/KomodityView.vue"
import HnojivaView from "../views/HnojivaView.vue"
import CennikView from "../views/CennikView.vue"
import ChemiaView from "../views/ChemiaView.vue"
import KontaktyView from "../views/KontaktyView.vue"
import PageNotFound from "../views/PageNotFound.vue"
import AktualityView from "../views/AktualityView.vue"
import OsivaView from "../views/OsivaView.vue"
import DopravaView from "../views/DopravaView.vue"
import SkladyView from "../views/SkladyView.vue"
import CardDetailView from "../views/CardDetailView.vue"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/about",
			name: "about",
			component: AboutView,
		},
		{
			path: "/sluzby",
			name: "sluzby",
			component: SluzbyView,
		},
		{
			path: "/admin",
			name: "admin",
			component: SignUpView,
		},
		{
			path: "/hnojiva",
			name: "hnojiva",
			component: HnojivaView,
		},
		{
			path: "/chemia",
			name: "chemia",
			component: ChemiaView,
		},
		{
			path: "/komodity",
			name: "komodity",
			component: KomodityView,
		},
		{
			path: "/kontakty",
			name: "kontakty",
			component: KontaktyView,
		},
		{
			path: "/:catchAll(.*)*",
			name: "PageNotFound",
			component: PageNotFound,
		},
		{
			path: "/aktuality",
			name: "aktuality",
			component: AktualityView,
		},
		{
			path: "/osiva",
			name: "osiva",
			component: OsivaView,
		},
		{
			path: "/doprava",
			name: "doprava",
			component: DopravaView,
		},
		{
			path: "/cennik",
			name: "cennik",
			component: CennikView,
		},
		{
			path: "/sklady",
			name: "sklady",
			component: SkladyView,
		},
		{
			path: "/card/:id",
			name: "cardDetail",
			component: CardDetailView,
			props: true,
		},
		//   {
		//     path: "/zatva",
		//     name: "zatva",
		//     component: ZatvaView,
		//   },
	],
	scrollBehavior(to, from, savedPosition) {
		// always scroll to top
		return { top: 0 }
	},
})

export default router
