export const actions = {
    addCard({commit}, data) {
        axios.post(`/api/v1/card/create`, {id: data.id, name: data.name, desk_list_id: data.desk_list_id})
            .catch(e => {
                commit('setErrorMessage', e.response.data.errors.name[0])
            })
    },
}
