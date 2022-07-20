export const actions = {
    addUserToCardParty({commit, dispatch}, data) {
        axios.post(`/api/v1/card_party/add_user`, {
            _method: 'POST',
            card_id: data.card_id,
            desk_id: data.desk_id,
            user_id: data.user_id,
        })
            .then(res => {
                data.id = data.card_id
                dispatch('getCardInfoNotLoader', data)
                dispatch('getDeskNotLoader', data.desk_id)
            })
    },
    removeUserToCardParty({commit, dispatch}, data) {
        axios.post(`/api/v1/card_party/${data.party_id}/delete`, {
            _method: 'DELETE',
            user_id: data.user_id,
        })
            .then(res => {
                data.id = data.card_id
                dispatch('getCardInfoNotLoader', data)
                dispatch('getDeskNotLoader', data.desk_id)
            })
    },
}

