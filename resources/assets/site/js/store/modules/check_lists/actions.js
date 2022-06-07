import {getPercentPerformedTasks} from "../../common/foo";

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

    updateCheckList({commit, dispatch}, data) {
        axios.post(`/api/v1/check_list/${data.id}/update`, {
            _method: 'PUT',
            name: data.name,
            id: data.id,
            card_id: data.card_id
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
