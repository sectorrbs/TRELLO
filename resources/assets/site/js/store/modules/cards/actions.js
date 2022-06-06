import {getPercentPerformedTasks} from "../../common/foo";

export const actions = {
    addCard({commit, dispatch}, data) {
        axios.post(`/api/v1/card/create`, {
            _method: 'POST',
            name: data.name,
            desk_lists_id: data.desk_lists_id
        })
            .then(res => {
                commit('setCardInfo', res.data.data)
            })
            .catch(e => {
                commit('setErrorMessage', e.response.data.errors.name[0])
            })
    },

    getCardId({commit}, id) {
        commit('setCardId', id)
    },

    getCardInfo({commit, dispatch}, data) {
        commit('changeModalLoad', true)
        axios.get(`/api/v1/card/${data.id}`)
            .then(res => {
                if (res.data.data.checkLists.length) {
                    dispatch('getPercentPerformedTasks', res.data.data.checkLists)
                }
                commit('setCardInfo', res.data.data)
            })
            .catch(e => {
                commit('setErrorMessage', e.response.data.errors.name[0])
            })
            .finally(() => {
                commit('changeModalLoad', false)
            })
    },

    getCardInfoNotLoader({commit, dispatch}, data) {
        axios.get(`/api/v1/card/${data.id}`)
            .then(res => {
                if (res.data.data.checkLists.length) {
                    dispatch('getPercentPerformedTasks', res.data.data.checkLists)
                }
                commit('setCardInfo', res.data.data)
            })
            .catch(e => {
                commit('setErrorMessage', e.response.data.errors.name[0])
            })
    },

    getPercentPerformedTasks({commit}, data) {
        let percentPerformedTasks = getPercentPerformedTasks(data)
        commit('setPercentPerformedTasks', percentPerformedTasks)
    },

    deleteCard({commit, dispatch}, data) {

        commit('changeLoader', true)
        axios.post(`/api/v1/card/${data.id}/delete`, {_method: 'DELETE', name: data.name, id: data.id})
            .catch(e => {
                commit('setErrorMessage', e.response.data.errors.name[0])
            })
            .finally(() => {
                dispatch('getDesk', data.deskList.desk_id)
                setTimeout(() => {
                    commit('changeLoader', false)
                }, 500)
            })
    }
}
