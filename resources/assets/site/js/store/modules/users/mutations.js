export const mutations = {
    setUsers(state, users) {
        state.users = users
    },
    setUserRoleAdminInRoom(state, status) {
        state.userRoleAdminInRoom = status
    },
    setUserRoleAdminInDesk(state, status) {
        state.userRoleAdminInDesk = status
    },
    setUserCurrentRoleInDesk(state,status){
        state.userCurrentRoleInDesk = status
    }
}
