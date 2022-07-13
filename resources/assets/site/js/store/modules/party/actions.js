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
        axios.post('')
        dispatch('clearUserFromPartyList')
        dispatch('hideModalCreateParty')
    },
}

