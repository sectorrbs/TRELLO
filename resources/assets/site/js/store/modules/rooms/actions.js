import router from '../../../router';

export const actions = {
    getRooms({commit}) {
        axios.get('/api/v1/room_party/get')
            .then(res => {
                console.log(res.data.data)
                // commit('setRooms', res.data.data)
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

    getRoom({commit, dispatch}, id) {
        commit('changeLoader', true)
        axios.get(`/api/v1/room/${id}`)
            .then(res => {
                if (res.data.data) {
                    commit('setRoom', res.data.data)
                } else {
                    router.push('/desks')
                }
            })
            .catch(e => commit('setErrorMessage', e.message))
            .finally(() => {
                dispatch('getUserRoleInRoom')
                commit('changeLoader', false)
            })
    },

    getRoomNotLoader({commit, dispatch}, id) {
        axios.get(`/api/v1/room/${id}`)
            .then(res => {
                commit('setRoom', res.data.data)
            })
            .catch(e => commit('setErrorMessage', e.message))
            .finally(() => {
                dispatch('getUserRoleInRoom')
            })
    },

    createRoom({commit, dispatch}, data) {
        commit('changeLoader', true)
        let user_id = localStorage.getItem('user_id')
        axios.post(`/api/v1/room/create`,
            {_method: 'POST', name: data.name, description: data.description, user_id})
            .then(res => {
                let data = res.data.data[0]
                let params = {user_id: data.user_id, room_id: data.id}
                dispatch('createRoomParty', params)
                commit('setErrorMessage', null)
            })
            .catch(e => {
                commit('setErrorMessage', e.response.data.errors.name[0])
            })
            .finally(() => {
                setTimeout(() => {
                    commit('changeLoader', false)
                }, 800)
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
