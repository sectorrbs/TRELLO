import axios from "axios";

export const actions = {

    addCardAttachmentImage({commit, dispatch}, data) {
        commit('openCardAttachmentLoader', 1)
        let formData = new FormData
        formData.append('card_id', data.card_id)
        formData.append('type', data.type)
        formData.append('image', data.image)
        formData.append('image_name', data.image_name)

        axios.post(`/api/v1/cards_attachments/create_image`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            setTimeout(() => {
                data.id = data.card_id
                dispatch('getCardInfoNotLoader', data)
                dispatch('getDeskNotLoader', data.desk_id)
                commit('closeCardAttachmentLoader', 0)
            }, 2000)
        }).catch(e => {
            commit('setCardErrorMessage', e.response.data.errors.image[0])
            setTimeout(() => {
                commit('setCardErrorMessage', null)
                commit('closeCardAttachmentLoader', 0)
            }, 3000)
        })
    },
    addCardAttachmentsCover({dispatch}, data) {
        axios.get(`/api/v1/cards_attachments/${data.id}/add-cover`).then(res => {
            data.id = data.card_id
            dispatch('getCardInfoNotLoader', data)
            dispatch('getDeskNotLoader', data.desk_id)
        })
    },
    deleteCardAttachmentsCover({dispatch}, data) {
        axios.get(`/api/v1/cards_attachments/${data.id}/delete-cover`).then(res => {
            data.id = data.card_id
            dispatch('getCardInfoNotLoader', data)
            dispatch('getDeskNotLoader', data.desk_id)
        })
    },
    addCardAttachmentLink({commit, dispatch}, data) {
        axios.post(`/api/v1/cards_attachments/create_link`,
            {
                _method: 'POST',
                card_id: data.card_id,
                type: data.type,
                link: data.link,
            }).then(() => {
            data.id = data.card_id
            dispatch('getCardInfoNotLoader', data)
            dispatch('getDeskNotLoader', data.desk_id)
        })
    },
    updateCardAttachmentLink({dispatch}, data) {
        axios.post(`/api/v1/cards_attachments/${data.id}/update`,
            {
                _method: 'POST',
                card_id: data.card_id,
                type: data.type,
                link: data.link,
            }).then(() => {
            data.id = data.card_id
            dispatch('getCardInfoNotLoader', data)
        })
    },
    updateCardAttachmentImage({dispatch}, data) {
        axios.post(`/api/v1/cards_attachments/${data.id}/update`,
            {
                _method: 'POST',
                card_id: data.card_id,
                type: data.type,
                image_name: data.image_name,
                cover: data.cover,
            }).then(() => {
            data.id = data.card_id
            dispatch('getCardInfoNotLoader', data)
        })
    },
    deleteCardAttachment({dispatch}, data) {
        axios.get(`/api/v1/cards_attachments/${data.id}/delete`).then(res => {
            data.id = data.card_id
            dispatch('getCardInfoNotLoader', data)
            dispatch('getDeskNotLoader', data.desk_id)
        })
    }
}
