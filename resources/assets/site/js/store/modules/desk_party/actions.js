import router from "../../../router";

export const actions = {
    createDeskParty({dispatch}, data) {
        axios.post('/api/v1/desk_party/add_user',
            {
                _method: 'POST',
                desk_id: data.desk_id,
                user_id: data.user_id,
                room_id: data.room_id
            })
            .then(() => {
            })
    },
    updateParticipantRole({dispatch}, data) {
        axios.post(`/api/v1/desk_party/${data.participant.id}/update_user`,
            {
                _method: 'PUT',
                id: data.id
            })
            .then(() => {
                dispatch('getDeskNotLoader', data.desk_id)
            })
    },
    getCountAdminsInDesk({commit}, participants) {
        let countAdmins = (participants.filter(el => el.role.status === 'admin')).length
        commit('setCountAdminsInDesk', countAdmins)
    },
    getDeskParty({commit}) {
        commit('changeLoader', true)
        axios.get('/api/v1/desk_party/get')
            .then(res => {
                let party = []
                res.data.data.filter(el => {
                    let i = party.findIndex(item => item.room_id === el.room_id)
                    if (i === -1) {
                        party.push(el)
                    }
                })
                commit('setDeskParty', party)
            })
            .catch(e => commit('setErrorMessage', e.message))
            .finally(() => {
                commit('changeLoader', false)
            })
    },
    getDeskPartyNotLoader({commit}) {
        axios.get('/api/v1/desk_party/get')
            .then(res => {
                commit('setDeskParty', res.data.data)
            })
            .catch(e => commit('setErrorMessage', e.message))
    },
}

