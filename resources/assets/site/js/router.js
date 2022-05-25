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
        name: 'desks_index',
        component: () => import(`${appPath}Desks/Index`)
    },
    {
        path: '/desks/:id',
        name: 'show',
        component: () => import(`${appPath}Desks/Show`),
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})


export default router
