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
            context.commit('setUserRoleAdminInRoom', true)
        } else {
            context.commit('setUserRoleAdminInRoom', false)
        }
    },
    getUserRoleInDesk(context) {
        if (context.getters.user) {
            let userId = context.getters.user.id
            let userInDesk = context.getters.desk.participants.find(el => +el.user.id === +userId)
            if (userInDesk.role.status === 'admin') {
                context.commit('setUserRoleAdminInDesk', true)
            } else {
                context.commit('setUserRoleAdminInDesk', false)
            }
            context.commit('setUserCurrentRoleInDesk', userInDesk.role.status)
        }
    }
}

