export const actions = {
    addTagToCard({dispatch}, data) {
        axios.post(`/api/v1/cards-tags/create`,
            {_method: 'POST', desk_tag_id: data.id_desk_tag, card_id: data.id_card})
            .then(res => {
                data.id = data.id_card
                dispatch('getCardInfoNotLoader', data)
            })
    },
    deleteTagToCard({dispatch}, data) {
        axios.post(`/api/v1/cards-tags/delete`,
            {_method: 'POST', desk_tag_id: data.id_desk_tag, card_id: data.id_card})
            .then(res => {
                data.id = data.id_card
                dispatch('getCardInfoNotLoader', data)
            })
    },
}
