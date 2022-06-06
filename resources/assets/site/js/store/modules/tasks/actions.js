export const actions = {
    createTask({dispatch}, data) {
        axios.post(`/api/v1/task/create`, {
            _method: 'POST',
            name: data.name,
            check_lists_id: data.check_lists_id,
        })
            .then(res => {
                data.id = data.card_id
                dispatch('getCardInfoNotLoader', data)
            })
    },
    deleteTask({dispatch}, data) {
        axios.post(`/api/v1/task/${data.id}/delete`, {_method: 'DELETE'})
            .then(res => {
                data.id = this.getters.cardId
                dispatch('getCardInfoNotLoader', data)
            })
    },
    updateTask({dispatch}, data) {
        axios.post(`/api/v1/task/${data.id}/update`, {
            _method: 'PUT',
            name: data.name,
            check_lists_id: data.check_lists_id,
            check: data.check,
        })
            .then(res => {
                data.id = this.getters.cardId
                dispatch('getCardInfoNotLoader', data)
            })
    }
}

