import router from '../../../router';
import {getInitialsFromUserName} from "../../common/foo";

export const actions = {
    login({commit, dispatch}, data) {
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('/login', data)
                .then(res => {
                    let a = {
                        a: 'sectorrbs@gmail.com',
                        b: 'sector1631'
                    }
                    dispatch('getUser')
                    localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN'])
                    router.push('/')
                })
                .catch(e => {
                    commit('setAuthErrors', e.response.data.errors)
                })
        });
    },

    register({commit, dispatch}, data) {
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('/register', data)
                .then(res => {
                    dispatch('getUser')
                    localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN'])
                    router.push('/')
                })
                .catch(e => {
                    console.log(e.response.data.errors)
                    commit('setAuthErrors', e.response.data.errors)
                })
        });
    },

    logout({commit}, data) {
        axios.post('/logout').then(res => {
            commit('deleteUser')
            localStorage.removeItem('x_xsrf_token')
            localStorage.removeItem('user_id')
            router.push('/login')
        })
    },

    getUser({commit}) {
        setTimeout(() => {
            if (localStorage.getItem('x_xsrf_token')) {
                axios.get('/api/v1/user').then(res => {
                    let userData = {
                        id: res.data.data.id,
                        email: res.data.data.email,
                        name: res.data.data.name,
                        initials: getInitialsFromUserName(res.data.data.name)
                    }
                    commit('setUser', userData)
                    localStorage.setItem('user_id', JSON.stringify(userData.id))
                });
            }
        }, 0)
    }
}
