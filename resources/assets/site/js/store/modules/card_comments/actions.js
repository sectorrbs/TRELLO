import axios from "axios";

export const actions = {
    createCardComment({commit, dispatch}, data) {
        axios.post(`/api/v1/card_comment/create`, {
            _method: 'POST',
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
    }
}

