export const actions = {
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
        axios.post('/api/v1/room_party/add', {_method: 'POST', data})
            .then((res) => {
                dispatch('getRoomNotLoader', data.roomId)
            })
        dispatch('clearUserFromPartyList')
        dispatch('hideModalCreateParty')
    },
}

