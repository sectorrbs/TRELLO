export const actions = {
    createCheckList({commit, dispatch}, data) {
        axios.post(`/api/v1/check_list/create`, {_method: 'POST', name: data.name, card_id: data.card_id})
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

    deleteCheckList({commit, dispatch}, data) {
        axios.post(`/api/v1/check_list/${data.id}/delete`, {_method: 'DELETE'})
            .then(res => {
                data.id = data.card_id
                dispatch('getCardInfo', data)
            })
    },
}
