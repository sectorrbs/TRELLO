import {createRouter, createWebHistory} from 'vue-router'

const appPath = './views/App/'
const authPath = './auth/'


const routes = [
    {
        path: '/',
        name: 'home',
        meta: {page_title: 'Главная', layout: 'main'},
        component: () => import('./views/Index')
    },
    {
        path: '/login',
        name: 'login',
        meta: {page_title: 'Вход в рафаелло', layout: 'empty'},
        component: () => import(`${authPath}Login`)
    },
    {
        path: '/register',
        name: 'register',
        meta: {page_title: 'Регистрация', layout: 'empty'},
        component: () => import(`${authPath}Register`)
    },
    {
        path: '/desks',
        name: 'desks_index',
        meta: {page_title: 'Доски', layout: 'main'},
        component: () => import(`${appPath}Desks/Index`)
    },
    {
        path: '/party/:id',
        name: 'party',
        meta: {page_title: 'Участники', layout: 'main'},
        component: () => import(`${appPath}Party/Index`)
    },
    {
        path: '/desks/:id',
        name: 'lists',
        meta: {layout: 'main', header: 'transparent'},
        component: () => import(`${appPath}Desks/Lists`),
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

// аналог middleware
router.beforeEach((to, from, next) => {
    let token = localStorage.getItem('x_xsrf_token')
    if (!token) {
        if (to.name === 'login' || to.name === 'register') {
            next()
        } else {
            next({name: 'login'})
        }
    } else {
        if (to.name === 'login' || to.name === 'register') {
            next({name: 'home'})
        } else {
            next()
        }
    }
})

export default router
