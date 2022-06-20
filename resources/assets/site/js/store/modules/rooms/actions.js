import router from '../../../router';

export const actions = {
    getRooms({commit}) {
        axios.get('/api/v1/rooms')
            .then(res => {
                commit('setRooms', res.data.data)
            })
            .catch(e => commit('setErrorMessage', e.message))
    },

    getRoomsNotLoader({commit}) {
        axios.get('/api/v1/rooms')
            .then(res => {
                commit('setRooms', res.data.data)
            })
            .catch(e => commit('setErrorMessage', e.message))
    },

    getRoom({commit}, id) {
        commit('changeLoader', true)
        axios.get(`/api/v1/room/${id}`)
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

    getRoomNotLoader({commit}, id) {
        axios.get(`/api/v1/desk/${id}`)
            .then(res => {
                commit('setDesk', res.data.data)
                setTimeout(() => {
                    document.querySelector('.desks__lists-inner').scrollLeft += 1000
                }, 300)
            })
            .catch(e => commit('setErrorMessage', e.message))
    },

    createRoom({commit, dispatch}, data) {
        commit('changeLoader', true)
        let user_id = localStorage.getItem('user_id')
        axios.post(`/api/v1/room/create`,
            {_method: 'POST', name: data.name, description: data.description, user_id})
            .then(res => {
                dispatch('getRooms')
                commit('setErrorMessage', null)
            })
            .catch(e => {
                commit('setErrorMessage', e.response.data.errors.name[0])
            })
            .finally(() => {
                setTimeout(() => {
                    commit('changeLoader', false)
                }, 300)
            })
    },
    updateRoom({commit}, desk) {
        let user_id = localStorage.getItem('user_id')
        axios.post(`/api/v1/desk/${desk.id}/update`,
            {_method: 'PUT', name: desk.name, id_backgrounds_desks: desk.id_backgrounds_desks, id: desk.id, user_id})
            .catch(e => {
                commit('setErrorMessage', e.response.data.errors.name[0])
            })
    },
    deleteRoom({commit}, desk) {
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
}
