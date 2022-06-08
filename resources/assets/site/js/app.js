import {createApp, h} from 'vue'
import App from './App.vue'

import router from './router';
import store from './store/index';

import components from './views/Global'
import plugins from './utils/plugins'

window.Vue = require('vue').default;
window.axios = require('axios');
window.axios.interceptors.response.use({}, e => {
    if (e.response.status === 401 || e.response.status === 419) {
        const token = localStorage.getItem('x_xsrf_token'),
            user_id = localStorage.getItem('user_id')
        router.push('/login')
        if (token) {
            localStorage.removeItem('x_xsrf_token')
            localStorage.removeItem('user_id')
        }
    }
})
axios.defaults.withCredentials = true;

const app = createApp({
    render: () => h(App)
});

app.component('app', require('./App.vue').default)

components.forEach(component => {
    app.component(component.name, component)
})

app.use(plugins).use(router).use(store).mount('#app')

