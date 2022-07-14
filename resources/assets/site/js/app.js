import {createApp, h} from 'vue'
import SwiperClass, { /* swiper modules... */} from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App.vue'

import 'swiper/css'

import router from './router';
import store from './store/index';

import components from './views/Global/'
import plugins from './utils/plugins'

window.Vue = require('vue').default;
window.axios = require('axios');

axios.defaults.withCredentials = true;

window.axios.interceptors.response.use({}, e => {
    if (e.response.status === 401 || e.response.status === 419) {
        const token = localStorage.getItem('x_xsrf_token'),
            user_id = localStorage.getItem('user_id')
        if (token) {
            localStorage.removeItem('x_xsrf_token')
            localStorage.removeItem('user_id')
        }
        router.push('/login')
    }
    if (e.response.status === 404) {
        router.push('/')
    }
    return Promise.reject(e)
})


SwiperClass.use([/* swiper modules... */])

const app = createApp({
    render: () => h(App)
});

import vue3PhotoPreview from 'vue3-photo-preview';
import 'vue3-photo-preview/dist/index.css';

app.component('app', require('./App.vue').default)

components.forEach(component => {
    app.component(component.name, component)
})

app.use(VueAwesomeSwiper).use(vue3PhotoPreview).use(plugins).use(router).use(store).mount('#app')

