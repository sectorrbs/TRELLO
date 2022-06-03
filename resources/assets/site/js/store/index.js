import {createStore} from 'vuex'
import Desks from './modules/desks/index'
import Lists from './modules/lists/index'
import Error from './modules/errors/index'
import Common from './modules/common/index'
import Cards from './modules/cards/index'
import CheckLists from './modules/check_lists/index'

const store = createStore({
    modules: {
        Desks, Error, Common, Lists, Cards, CheckLists
    }
})

export default store
