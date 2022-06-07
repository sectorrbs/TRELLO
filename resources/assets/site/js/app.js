window.Vue = require('vue').default;
window.axios = require('axios');
axios.defaults.withCredentials = true;
import { createApp,h } from 'vue'
import App from './App.vue'

import router from './router';
import store from './store/index';

import components from './views/Global'
import plugins from './utils/plugins'


const app  = createApp({
    render: ()=>h(App)
});

app.component('app', require('./App.vue').default)

components.forEach(component => {
    app.component(component.name, component)
})

app.use(plugins).use(router).use(store).mount('#app')

