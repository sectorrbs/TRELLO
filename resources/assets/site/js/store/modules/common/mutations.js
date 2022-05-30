export const mutations = {
    changeLoader(state, loader) {
        state.loader = loader
    },
    changeModalLoad(state, modalLoad) {
        state.modalLoad = modalLoad
    },
    operationModal(state, status){
        state.modal = status
    },
}
