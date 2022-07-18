import {ROLES} from "../../common/constants";

export const actions = {
    openModal({commit, dispatch}, card = null) {
        commit('operationModal', true)
        dispatch('getCardInfo', card)
    },
    closeModal({commit}) {
        commit('operationModal', false)
    },
    openModalCreateRoom({}) {
        document.querySelector('.room__modal.modal').classList.add('show')
    },
    hideModalCreateRoom({}) {
        document.querySelector('.room__modal.modal').classList.remove('show')
    },
    openModalCreateParty({}) {
        document.querySelector('.party__modal.modal').classList.add('show')
    },
    hideModalCreateParty({}) {
        document.querySelector('.party__modal.modal').classList.remove('show')
    },
    getRoles({commit}) {
        commit('setRoles', ROLES)
    },
    getSpace({commit}, space){
        commit('setSpace', space)
    }
}
