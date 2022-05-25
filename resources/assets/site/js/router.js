import {createRouter, createWebHistory} from 'vue-router'

const appPath = './views/App/'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./views/Index')
    },
    {
        path: '/desks',
        name: 'desks',
        component: () => import(`${appPath}Desks/Desks`)
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})


export default router
