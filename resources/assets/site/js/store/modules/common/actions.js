export const actions = {
    openModal({commit, dispatch}, card = null) {

        console.log(card)

        commit('operationModal', true)
        dispatch('getCardInfo', card)
    },
    closeModal({commit}) {
        commit('operationModal', false)
    }
}
