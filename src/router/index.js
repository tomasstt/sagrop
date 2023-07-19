
import {createRouter, createWebHistory} from "vue-router"
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import SluzbyView from "../views/SluzbyView.vue"
import SignUpView from "../views/SignUpView.vue" 
import KomodityView from "../views/KomodityView.vue"
import HnojivaView from "../views/HnojivaView.vue"
import ChemiaView from "../views/ChemiaView.vue"
import KontaktyView from "../views/KontaktyView.vue"
import PageNotFound from '../views/PageNotFound.vue'
import AktualityView from "../views/AktualityView.vue"
import OsivaView from "../views/OsivaView.vue"
import DopravaView from  "../views/DopravaView.vue"
import SkladyView from "../views/SkladyView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name:"home",
            component :HomeView
        },
        {
        path: "/about",
        name: "about", 
        component: AboutView
        },
        {
            path: "/sluzby",
            name: "sluzby", 
            component: SluzbyView
            },
            {
                path: "/signup",
                name: "signup", 
                component: SignUpView
                },
                {
                    path: "/hnojiva",
                    name: "hnojiva", 
                    component: HnojivaView
                    },
                    {
                        path: "/chemia",
                        name: "chemia", 
                        component: ChemiaView
                        },
                    {
                        path: "/komodity",
                        name: "komodity", 
                        component: KomodityView
                        },
                        {
                            path: "/kontakty",
                            name: "kontakty", 
                            component: KontaktyView
                            },{
                                path: '/:catchAll(.*)*',
                                name: "PageNotFound",
                                component: PageNotFound,
                              },{
                                path: "/aktuality",
                                name: "aktuality",
                                component: AktualityView,
                              },{
                                path: "/osiva",
                                name: "osiva",
                                component: OsivaView,
                              },{
                                path: "/doprava",
                                name: "doprava",
                                component: DopravaView,
                              },
                              {
                                path: "/sklady",
                                name: "sklady",
                                component: SkladyView,
                              },
                            //   {
                            //     path: "/zatva",
                            //     name: "zatva",
                            //     component: ZatvaView,
                            //   },

                            
                            
    ]

})

export default router