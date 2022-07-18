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
    setRoles(state, roles){
        state.roles = roles
    },
    setSpace(state, space){
        state.space = space
    }
}
