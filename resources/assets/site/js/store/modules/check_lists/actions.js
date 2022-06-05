export const actions = {
    createCheckList({commit, dispatch}, data) {
        axios.post(`/api/v1/check_list/create`, {
            _method: 'POST',
            name: data.name,
            card_id: data.card_id
        })
            .then(res => {
                data.id = data.card_id
                dispatch('getCardInfoNotLoader', data)
            })
    },

    deleteCheckList({commit, dispatch}, data) {
        axios.post(`/api/v1/check_list/${data.id}/delete`, {_method: 'DELETE'})
            .then(res => {
                data.id = data.card_id
                dispatch('getCardInfoNotLoader', data)
            })
    },
}
