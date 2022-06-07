export const mutations = {
    setUser(state, data) {
        state.user = data
    },
    deleteUser(state){
        state.user = null
    }
}
