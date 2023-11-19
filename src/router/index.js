import { createRouter } from 'vue-router'

const routes = [
    {
        path: '/', component: {
            render() {
                return ''
            }
        }
    },
    {
        path: '/:page', component: () => import('../View.vue'), props: true
    }
]
import { createWebHistory } from "vue-router"
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router