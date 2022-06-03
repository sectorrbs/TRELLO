export const actions = {
    updateList({commit}, data) {
        axios.post(`/api/v1/list/${data.id}/update`, {
            _method: 'PUT',
            id: data.id,
            name: data.name,
            desk_id: data.desk_id
        })
            .catch(e => {
                commit('setErrorMessage', e.response.data.errors.name[0])
            })
    },
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
                dispatch('getDeskNotLoader', data.desk_id)
            })
    },
    deleteList({commit, dispatch}, list) {
        commit('changeLoader', true)
        axios.post(`/api/v1/list/${list.id}/delete`, {_method: 'DELETE', name: list.name, id: list.id})
            .catch(e => {
                commit('setErrorMessage', e.response.data.errors.name[0])
            })
            .finally(() => {
                dispatch('getDesk', list.desk_id)
                setTimeout(() => {
                    commit('changeLoader', false)
                }, 220)
            })
    }
}
