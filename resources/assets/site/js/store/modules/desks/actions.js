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

    getDesk({commit, dispatch}, id) {
        commit('changeLoader', true)
        axios.get(`/api/v1/desk/${id}`)
            .then(res => {
                if (res.data.data) {
                    commit('setDesk', res.data.data)
                    dispatch('getRoom', res.data.data.room_id)
                } else {
                    router.push('/desks')
                }
            })
            .catch(e => commit('setErrorMessage', e.message))
            .finally(() => {
                commit('changeLoader', false)
            })
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

    createDesk({commit, dispatch, getters}, data) {
        let desk_id = null
        axios.post(`/api/v1/desk/create`,
            {
                _method: 'POST',
                name: data.name,
                id_backgrounds_desks: data.idBg,
                room_id: data.room_id
            })
            .then(res => {
                desk_id = res.data.data.id
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
                dispatch('createDeskParty',
                    {desk_id, user_id: getters.user.id, room_id: data.room_id})
                dispatch('getRoomPartyNotLoader')
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

        axios.post(`/api/v1/desk/${desk.id}/delete`, {_method: 'DELETE', name: desk.name, id: desk.id})
            .then(res => {
                dispatch('getRoomPartyNotLoader')
            })
            .catch(e => {
                commit('setErrorMessage', e.response.data.errors.name[0])
            })
            .finally(() => {

            })
    },
    getBackgroundsDesks({commit}) {
        axios.get('/api/v1/backgrounds-desks')
            .then(res => {
                commit('setBackgroundsDesks', res.data.data)
            })
    },
}
