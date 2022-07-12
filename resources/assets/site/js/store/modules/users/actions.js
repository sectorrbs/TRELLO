import {getCountTasks} from "../../common/foo";

export const actions = {
    getUsers({commit}, name) {
        commit('setUsers', null)
        axios.get(`/api/v1/users/get`, {params: {name: name}})
            .then(res => {
                commit('setUsers', res.data.data)
            })
    }
}

