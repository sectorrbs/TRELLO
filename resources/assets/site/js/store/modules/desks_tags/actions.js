export const actions = {
    getDeskTags({commit, dispatch}, data) {
        axios.get(`/api/v1/desk-tags/${data.id_desk}`).then(res => {
            commit('setDeskTags', res.data.data)
        })
    },
    updateDeskTags({commit, dispatch}, data) {
        axios.post(`/api/v1/desk-tags/${data.id}/update`,
            {_method: 'PUT', id: data.id, id_desk: data.id_desk, title: data.title})

    },
}
