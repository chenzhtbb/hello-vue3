import { createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About }
]
import { createWebHistory } from "vue-router"
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router