export const actions = {
    openModal({commit, dispatch}, card = null) {
        commit('operationModal', true)
        dispatch('getCardInfo', card)
    },
    closeModal({commit}) {
        commit('operationModal', false)
    }
}
