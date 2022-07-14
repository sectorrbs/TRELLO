export const actions = {
    getUsers({commit}, name) {
        commit('setUsers', null)
        axios.get(`/api/v1/users/get`, {params: {name: name}})
            .then(res => {
                commit('setUsers', res.data.data)
            })
    },
    getUserRoleInRoom(context) {
        let userId = context.getters.user.id
        let userInRoom = context.getters.room.participants.find(el => +el.user.id === +userId)
        if (userInRoom.role.status === 'admin') {
            context.commit('setUserRoleAdmin', true)
        } else {
            context.commit('setUserRoleAdmin', false)
        }
    }
}

