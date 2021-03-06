import {getPercentPerformedTasks} from "../../common/foo";
import axios from "axios";

export const actions = {
    addCard({commit, dispatch}, data) {
        axios.post(`/api/v1/card/create`, {
            _method: 'POST',
            name: data.name,
            num: data.num,
            description: data.description,
            term: data.term,
            status: data.status,
            id_backgrounds_cards: null,
            desk_lists_id: data.desk_lists_id
        })
            .then(res => {
                commit('setCardInfo', res.data.data)
            })
            .catch(e => {
                commit('setErrorMessage', e.response.data.errors.name[0])
            })
    },

    updateCard({commit, dispatch}, data) {
        axios.post(`/api/v1/card/${data.id}/update`, {
            _method: 'PUT',
            name: data.name,
            num: data.num,
            status: data.status,
            description: data.description || null,
            term: data.term || null,
            id_backgrounds_cards: data.id_backgrounds_cards || null,
            desk_lists_id: data.desk_lists_id,
            id: data.id,
        }).then(res => dispatch('getDeskNotLoader', data.deskList.desk_id))
    },

    updateCardOverdue({commit}, data) {
        axios.post(`/api/v1/card/${data.id}/update`, {
            _method: 'PUT',
            name: data.name,
            num: data.num,
            status: data.status,
            description: data.description || null,
            id_backgrounds_cards: data.id_backgrounds_cards || null,
            term: data.term || null,
            desk_lists_id: data.desk_lists_id,
            id: data.id,
        })
    },

    updateSuccessionCards({dispatch}, data) {
        axios.post('/api/v1/card/update-succession', data.succession)
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
                commit('setCardParty', res.data.data.participants)
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
                commit('setCardParty', res.data.data.participants)
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
    },
    getBackgroundsCards({commit}) {
        axios.get('/api/v1/backgrounds-cards')
            .then(res => {
                commit('setBackgroundsCards', res.data.data)
            })
    },
}
