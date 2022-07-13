export const mutations = {
    changeDisplayWindow(state, display) {
        state.displayWindow = display
    },
    pushUserToLists(state, user) {
        let isUser = state.partyUsers.find(el => el.id === user.id)
        if (!isUser) {
            state.partyUsers.push(user)
        }
    },
    removeUserFromLists(state, userId) {
        let user = state.partyUsers.find(el => el.id === userId)
        let index = state.partyUsers.indexOf(user)
        if (index > -1) {
            state.partyUsers.splice(index, 1)
        }
    },
    clearUserToLists(state) {
        setTimeout(() => {
            state.partyUsers = []
        }, 500)

    }
}
