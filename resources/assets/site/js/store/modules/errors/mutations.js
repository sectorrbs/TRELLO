export const mutations = {
    setErrorMessage(state, error) {
        state.errorMessage = error
    },
    setAuthErrors(state, errors) {
        state.authErrors.email = errors?.email || null
        state.authErrors.password = errors?.password || null
    }
}
