export const mutations = {
    openCardAttachmentLoader(state, status) {
        state.attachmentLoad = status
    },
    closeCardAttachmentLoader(state, status) {
        state.attachmentLoad = status
    },
    setBackgroundsCards(state, backgrounds_cards) {
        state.backgrounds_cards = backgrounds_cards
    }
}
