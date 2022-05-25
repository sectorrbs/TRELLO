import {createStore} from 'vuex'
import Desks from './modules/desks/index'
import Error from './modules/errors/index'
import Common from './modules/common/index'

const store = createStore({
    modules: {
        Desks, Error, Common
    }
})

export default store
