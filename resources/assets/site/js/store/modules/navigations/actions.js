export const actions = {
    getNav({commit}) {
        axios.get('api/getNav').then(res => {
            commit('setNav', res.data)
        })
    }
}
