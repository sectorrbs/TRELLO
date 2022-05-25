export const actions = {
    getDesks({commit}) {

        commit('changeLoader', true)

        axios.get('api/v1/desks')
            .then(res => {
                commit('setDesks', res.data.data)
            })
            .catch(e => commit('setErrorMessage', e.message))
            .finally(() => commit('changeLoader', false))

    }
}
