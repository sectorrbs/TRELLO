import router from "../../../router";

export const actions = {
    createRoomParty({dispatch}, data) {
        axios.post('/api/v1/room_party/add_user',
            {_method: 'POST', user_id: data.user_id, room_id: data.room_id})
            .then(() => {
                dispatch('getRoomPartyNotLoader')
            })
    },
    getRoomParty({commit}) {
        commit('changeLoader', true)
        axios.get('/api/v1/room_party/get')
            .then(res => {
                commit('setRoomParty', res.data.data)
            })
            .catch(e => commit('setErrorMessage', e.message))
            .finally(() => {
                commit('changeLoader', false)
            })
    },
    getRoomPartyNotLoader({commit}) {
        axios.get('/api/v1/room_party/get')
            .then(res => {
                commit('setRoomParty', res.data.data)
            })
            .catch(e => commit('setErrorMessage', e.message))
    },
    clearUserFromPartyList({commit, dispatch}) {
        commit('clearUserToLists')
        dispatch('hideWindowUsersList')
    },
    addUserToParty({commit}, user) {
        commit('pushUserToLists', user)
    },
    removeUserToParty({commit}, userId) {
        commit('removeUserFromLists', userId)
    },
    showWindowUsersList({commit}) {
        commit('changeDisplayWindow', true)
    },
    hideWindowUsersList({commit}) {
        commit('changeDisplayWindow', false)
    },
    sendInviteToParty({commit, dispatch}, data) {
        axios.post('/api/v1/room_party/add_users', {_method: 'POST', data})
            .then((res) => {
                dispatch('getRoomNotLoader', data.roomId)
            })
        dispatch('clearUserFromPartyList')
        dispatch('hideModalCreateParty')
    },
    appointmentAdminRoomParty({commit, dispatch, getters}, id) {
        axios.post(`/api/v1/room_party/${id}/appointment_admin`, {_method: 'PUT', id})
            .then((res) => {
                dispatch('getRoomNotLoader', getters.room.id)
            })
    },
    appointmentRegularRoomParty({commit, dispatch, getters}, id) {
        axios.post(`/api/v1/room_party/${id}/appointment_regular`, {_method: 'PUT', id})
            .then((res) => {
                dispatch('getRoomNotLoader', getters.room.id)
            })
    },
    appointmentGuestRoomParty({commit, dispatch, getters}, id) {
        axios.post(`/api/v1/room_party/${id}/appointment_guest`, {_method: 'PUT', id})
            .then((res) => {
                dispatch('getRoomNotLoader', getters.room.id)
            })
    },
    excludeParticipantRoomParty({commit, dispatch, getters}, id) {
        axios.post(`/api/v1/room_party/${id}/delete_participant`, {_method: 'DELETE', id})
            .then((res) => {
                dispatch('getRoomNotLoader', getters.room.id)
            })
    },
    leaveRoomParty({commit, dispatch, getters}, id) {
        axios.post(`/api/v1/room_party/${id}/delete_participant`, {_method: 'DELETE', id})
            .then((res) => {
                router.push({name: 'desks_index'})
            })
    },
}

