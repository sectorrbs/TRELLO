export const mutations = {
    setErrorMessage(state, error) {
        state.errorMessage = error
    },
    setCardErrorMessage(state, error) {
        state.errorCardMessage = error
    },
    setAuthErrors(state, errors) {
        state.authErrors.email = errors?.email || null
        state.authErrors.password = errors?.password || null
    }
}
