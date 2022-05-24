import {createStore} from 'vuex'
import Navigations from './modules/navigations/index'

const store = createStore({
    modules: {
        Navigations
    }
})

export default store
