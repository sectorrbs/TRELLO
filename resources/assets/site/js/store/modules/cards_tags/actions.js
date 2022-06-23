export const actions = {
    addTagToCard({}, tag) {
        axios.post(`/api/v1/cards-tags/create`,
            {_method: 'POST', 'id_desk_tag': tag.id_desk_tag, 'id_card': tag.id_card})
            .then(res => {
                console.log(123)
            })
    }
}
