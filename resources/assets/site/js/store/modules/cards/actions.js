export const actions = {
    addCard({commit, dispatch}, data) {
        axios.post(`/api/v1/card/create`, {
            _method: 'POST',
            name: data.name,
            desk_lists_id: data.desk_lists_id
        })
            .then(res=>{
                commit('setCardInfo', res.data.data)
            })
            .catch(e => {
                commit('setErrorMessage', e.response.data.errors.name[0])
            })
    },

    getCardInfo({commit}, data) {
        commit('changeModalLoad', true)
        axios.get(`/api/v1/card/${data.id}`)
            .then(res => {
                commit('setCardInfo', res.data.data)
            })
            .catch(e => {
                commit('setErrorMessage', e.response.data.errors.name[0])
            })
            .finally(() => {
                commit('changeModalLoad', false)
            })
    },

    deleteCard({commit, dispatch}, data) {
        console.log(data)
        commit('changeLoader', true)
        axios.post(`/api/v1/card/${data.id}/delete`, {_method: 'DELETE', name: data.name, id: data.id})
            .catch(e => {
                commit('setErrorMessage', e.response.data.errors.name[0])
            })
            .finally(() => {
                dispatch('getDesk', data.deskList.desk_id)
                setTimeout(() => {
                    commit('changeLoader', false)
                }, 220)
            })
    }
}
