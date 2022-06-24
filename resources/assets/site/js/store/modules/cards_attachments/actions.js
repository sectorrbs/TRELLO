import axios from "axios";

export const actions = {
    addCardAttachmentImage({}, data) {

        let formData = new FormData
        formData.append('card_id', data.card_id)
        formData.append('type', data.type)
        formData.append('image', data.image)
        formData.append('link', null)

        axios.post(`/api/v1/cards_attachments/create_image`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => console.log(res))
    }
}
