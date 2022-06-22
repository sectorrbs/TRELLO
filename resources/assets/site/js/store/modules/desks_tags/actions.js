export const actions = {
    getDeskTags({commit}, deskId) {
        axios.get(`/api/v1/desk-tags/${deskId}`).then(res => {
            commit('setDeskTags', res.data.data)
        })
    },
    updateDeskTags({commit, dispatch}, data) {
        axios.post(`/api/v1/desk-tags/${data.id}/update`,
            {_method: 'PUT', id: data.id, id_desk: data.id_desk, title: data.title})
            .then(res => {
                data.id = data.id_card
                dispatch('getCardInfoNotLoader', data)
            })
    }
}
