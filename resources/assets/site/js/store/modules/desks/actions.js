export const actions = {
    getDesks({commit}) {

        commit('changeLoader', true)

        axios.get('/api/v1/desks')
            .then(res => {
                commit('setDesks', res.data.data)
            })
            .catch(e => commit('setErrorMessage', e.message))
            .finally(() => commit('changeLoader', false))

    },

    getDesk({commit}, id) {
        commit('changeLoader', true)
        axios.get(`/api/v1/desk/${id}`)
            .then(res => {
                 console.log(res.data.data)
                commit('setDesk', res.data.data)
            })
            .catch(e => commit('setErrorMessage', e.message))
            .finally(() => commit('changeLoader', false))
    },
    createDesk({commit, dispatch}, name) {
        commit('changeLoader', true)
        axios.post(`/api/v1/desk/create`, {_method: 'POST', name,})
            .then(res => {
                commit('setErrorMessage', null)
                commit('setDesk', res.data.data)
            })
            .catch(e => {
                commit('setErrorMessage', e.response.data.errors.name[0])
            })
            .finally(() => {
                dispatch('getDesks')
                setTimeout(() => {
                    commit('changeLoader', false)
                }, 250)
            })
    },
    updateDesk({commit}, desk) {
        commit('changeLoader', true)
        axios.post(`/api/v1/desk/${desk.id}/update`, {_method: 'PUT', name: desk.name, id: desk.id})
            .catch(e => {
                commit('setErrorMessage', e.response.data.errors.name[0])
            })
            .finally(() => commit('changeLoader', false))
    },
    deleteDesk({commit}, desk) {
        commit('changeLoader', true)
        axios.post(`/api/v1/desk/${desk.id}/delete`, {_method: 'DELETE', name: desk.name, id: desk.id})
            .then(res => {
                commit('setDesks', res.data.data)
            })
            .catch(e => {
                commit('setErrorMessage', e.response.data.errors.name[0])
            })
            .finally(() => commit('changeLoader', false))
    }
}