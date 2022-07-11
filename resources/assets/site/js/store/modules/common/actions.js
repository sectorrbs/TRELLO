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
}
