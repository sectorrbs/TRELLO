import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./views/Index')
    },
    {
        path: '/desks',
        name: 'desks',
        component: () => import('./views/Desks/Desks')
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})


export default router
