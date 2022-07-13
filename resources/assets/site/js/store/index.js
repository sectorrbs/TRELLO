import {createStore} from 'vuex'
import Rooms from './modules/rooms/index'
import Desks from './modules/desks/index'
import Lists from './modules/lists/index'
import Error from './modules/errors/index'
import Common from './modules/common/index'
import Cards from './modules/cards/index'
import CheckLists from './modules/check_lists/index'
import Tasks from './modules/tasks/index'
import Auth from './modules/auth/index'
import DesksTags from './modules/desks_tags/index'
import CardsTags from './modules/cards_tags/index'
import CardsAttachments from './modules/cards_attachments/index'
import Users from './modules/users/index'
import Party from './modules/party/index'

const store = createStore({
    modules: {
        Rooms,
        Desks,
        Error,
        Common,
        Lists,
        Cards,
        CheckLists,
        Tasks,
        Auth,
        DesksTags,
        CardsTags,
        CardsAttachments,
        Users,
        Party
    }
})

export default store
