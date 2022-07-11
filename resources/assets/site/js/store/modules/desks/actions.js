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
        axios.post(`/api/v1/desk/create`,
            {
                _method: 'POST',
                name: data.name,
                id_backgrounds_desks: data.idBg,
                room_id: data.room_id
            })
            .then(res => {
                axios.post(`/api/v1/desks-tags/create`, {
                    _method: 'POST',
                    id_desk: res.data.data.id
                })
                commit('setErrorMessage', null)
                commit('setDesk', res.data.data)
            })
            .catch(e => {
                commit('setErrorMessage', e.response.data.errors.name[0])
            })
            .finally(() => {
                dispatch('getRooms')
            })
    },
    updateDesk({commit}, desk) {
        axios.post(`/api/v1/desk/${desk.id}/update`,
            {
                _method: 'PUT',
                name: desk.name,
                id_backgrounds_desks: desk.id_backgrounds_desks,
                id: desk.id,
                is_tag_enlarged: desk.is_tag_enlarged,
                is_descr_enlarged: desk.is_descr_enlarged,
                room_id: desk.room_id
            })
            .catch(e => {
                commit('setErrorMessage', e.response.data.errors.name[0])
            })
    },
    deleteDesk({commit, dispatch}, desk) {
        commit('changeLoader', true)
        axios.post(`/api/v1/desk/${desk.id}/delete`, {_method: 'DELETE', name: desk.name, id: desk.id})
            .then(res => {
                dispatch('getRooms')
                setTimeout(() => {
                    commit('changeLoader', false)
                }, 100)
            })
            .catch(e => {
                commit('setErrorMessage', e.response.data.errors.name[0])
            })
    },
    getBackgroundsDesks({commit}) {
        axios.get('/api/v1/backgrounds-desks')
            .then(res => {
                commit('setBackgroundsDesks', res.data.data)
            })
    },
}
