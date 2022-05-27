export const actions = {
    createList({commit, dispatch}, data) {
        axios.post(`/api/v1/list/create`, {_method: 'POST', name: data.name, desk_id: data.desk_id})
            .then(res => {
                commit('setErrorMessage', null)
                commit('setList', res.data.data)
            })
            .catch(e => {
                commit('setErrorMessage', e.response.data.errors.name[0])
            })
            .finally(() => {
                dispatch('getDesk', data.desk_id)
            })
    },
}
