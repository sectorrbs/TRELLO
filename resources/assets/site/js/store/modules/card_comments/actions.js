import axios from "axios";

export const actions = {
    createOrUpdateCardComment({commit, dispatch}, data) {
        console.log(data)
        axios.post(`/api/v1/card_comment/create-or-update`, {
            _method: 'POST',
            comment_id: data.comment_id || null,
            user_id: data.user_id,
            card_id: data.card_id,
            text: data.text,
        })
            .then(res => {
                data.id = data.card_id
                dispatch('getCardInfoNotLoader', data)
            })
            .catch(e => {
                commit('setErrorMessage', e.response.data.errors.name[0])
            })
    },
    deleteComment({dispatch}, data) {
        axios.post(`/api/v1/card_comment/${data.id}/delete`, {_method: 'DELETE'})
            .then(() => {
                data.id = data.card_id
                dispatch('getCardInfoNotLoader', data)
            })
    }
}

