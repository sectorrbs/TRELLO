import {createRouter, createWebHistory} from 'vue-router'

const appPath = './views/App/'
const authPath = './auth/'


const routes = [
    {
        path: '/',
        name: 'home',
        meta: {page_title: 'Главная'},
        component: () => import('./views/Index')
    },
    {
        path: '/login',
        name: 'login',
        meta: {page_title: 'Вход в рафаелло'},
        component: () => import(`${authPath}Login`)
    },
    {
        path: '/register',
        name: 'register',
        meta: {page_title: 'Регистрация'},
        component: () => import(`${authPath}Register`)
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
