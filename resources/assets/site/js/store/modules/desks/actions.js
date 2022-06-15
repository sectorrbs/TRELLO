import router from '../../../router';

export const actions = {
    getDesks({commit}) {
        commit('changeLoader', true)
        axios.get('/api/v1/desks')
            .then(res => {
                commit('setDesks', res.data.data)
            })
            .catch(e => commit('setErrorMessage', e.message))
            .finally(() => commit('changeLoader', false))

    },

    getDesksNotLoader({commit}) {
        axios.get('/api/v1/desks')
            .then(res => {
                commit('setDesks', res.data.data)
            })
            .catch(e => commit('setErrorMessage', e.message))
    },

    getDesk({commit}, id) {
        commit('changeLoader', true)
        axios.get(`/api/v1/desk/${id}`)
            .then(res => {
                if (res.data.data) {
                    commit('setDesk', res.data.data)
                } else {
                    router.push('/desks')
                }
            })
            .catch(e => commit('setErrorMessage', e.message))
            .finally(() => commit('changeLoader', false))
    },

    getDeskNotLoader({commit}, id) {
        axios.get(`/api/v1/desk/${id}`)
            .then(res => {
                commit('setDesk', res.data.data)
                setTimeout(() => {
                    document.querySelector('.desks__lists-inner').scrollLeft += 1000
                }, 300)
            })
            .catch(e => commit('setErrorMessage', e.message))
    },

    createDesk({commit, dispatch}, data) {
        let user_id = localStorage.getItem('user_id')
        axios.post(`/api/v1/desk/create`,
            {_method: 'POST', name: data.name, id_backgrounds_desks: data.idBg, user_id})
            .then(res => {
                commit('setErrorMessage', null)
                commit('setDesk', res.data.data)
            })
            .catch(e => {
                commit('setErrorMessage', e.response.data.errors.name[0])
            })
            .finally(() => {
                dispatch('getDesks')
            })
    },
    updateDesk({commit}, desk) {
        let user_id = localStorage.getItem('user_id')
        axios.post(`/api/v1/desk/${desk.id}/update`,
            {_method: 'PUT', name: desk.name, id_backgrounds_desks: desk.id_backgrounds_desks, id: desk.id, user_id})
            .catch(e => {
                commit('setErrorMessage', e.response.data.errors.name[0])
            })
    },
    deleteDesk({commit}, desk) {
        commit('changePageLoad', true)
        axios.post(`/api/v1/desk/${desk.id}/delete`, {_method: 'DELETE', name: desk.name, id: desk.id})
            .then(res => {
                commit('setDesks', res.data.data)
            })
            .catch(e => {
                commit('setErrorMessage', e.response.data.errors.name[0])
            })
            .finally(() => commit('changePageLoad', false))
    },
    getBackgroundsDesks({commit}) {

        axios.get('/api/v1/backgrounds-desks')
            .then(res => {
                console.log(res.data.data)
                commit('setBackgroundsDesks', res.data.data)
            })
    }
}
