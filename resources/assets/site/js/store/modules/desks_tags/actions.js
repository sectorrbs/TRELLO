export const actions = {
    getDeskTags({commit}, deskId) {
        axios.get(`/api/v1/desk-tags/${deskId}`).then(res => {
            commit('setDeskTags', res.data.data)
        })
    },
    updateDeskTags({commit}, tag) {
        console.log(tag)
        axios.post(`/api/v1/desk-tags/${tag.id}/update`,
            {_method: 'PUT', id: tag.id, title: tag.title})
            .catch(e => {
                commit('setErrorMessage', e.response.data.errors.name[0])
            })
    },
}
