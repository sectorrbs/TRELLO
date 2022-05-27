import {createRouter, createWebHistory} from 'vue-router'

const appPath = './views/App/'


const routes = [
    {
        path: '/',
        name: 'home',
        meta: {page_title: 'Главная'} ,
        component: () => import('./views/Index')
    },
    {
        path: '/desks',
        name: 'desks_index',
        meta: {page_title: 'Доски'},
        component: () => import(`${appPath}Desks/Index`)
    },
    {
        path: '/desks/:id',
        name: 'lists',
        component: () => import(`${appPath}Desks/Lists`),
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})


export default router
