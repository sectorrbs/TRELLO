import {getCountTasks} from '../../common/foo'

export const actions = {
    createTask({dispatch, getters}, data) {
        axios.post(`/api/v1/task/create`, {
            _method: 'POST',
            name: data.name,
            check_lists_id: data.check_lists_id,
        })
            .then(res => {
                data.id = data.card_id
                dispatch('getCardInfoNotLoader', data)
                setTimeout(()=>{
                    getCountTasks(getters.cardInfo)
                },600)
            })
    },
    deleteTask({dispatch, getters}, data) {
        axios.post(`/api/v1/task/${data.id}/delete`, {_method: 'DELETE'})
            .then(res => {
                data.id = this.getters.cardId
                dispatch('getCardInfoNotLoader', data)
                setTimeout(()=>{
                    getCountTasks(getters.cardInfo)
                },600)
            })
    },
    async updateTask({dispatch, getters}, data) {
        axios.post(`/api/v1/task/${data.id}/update`, {
            _method: 'PUT',
            name: data.name,
            check_lists_id: data.check_lists_id,
            check: data.check,
        })
            .then(res => {
                data.id = this.getters.cardId
                dispatch('getCardInfoNotLoader', data)
                setTimeout(()=>{
                    getCountTasks(getters.cardInfo)
                },600)
            })

    }
}

