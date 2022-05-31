export const mutations = {
    changeLoader(state, loader) {
        state.loader = loader
    },
    changePageLoad(state, pageLoad) {
        state.pageLoad = pageLoad
    },
    changeModalLoad(state, modalLoad) {
        state.modalLoad = modalLoad
    },
    operationModal(state, status){
        state.modal = status
    },
}
