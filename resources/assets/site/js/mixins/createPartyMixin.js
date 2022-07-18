import CreateParticipantsSearch from "../views/Global/CreateParty/CreateParticipantsSearch";
import CreateParticipantsPossibleList from "../views/Global/CreateParty/CreateParticipantsPossibleList";
import CreateParticipantsConfirm from "../views/Global/CreateParty/CreateParticipantsConfirm";
import CreateParticipantsMessage from "../views/Global/CreateParty/CreateParticipantsMessage";
import CreateParticipantsSelect from "../views/Global/CreateParty/CreateParticipantsSelect";
import CreateParticipantsCurrentList from "../views/Global/CreateParty/CreateParticipantsCurrentList";

export const createPartyMixin = {
    data() {
        return {
            text: null,
            message: null
        }
    },
    props: {
        desk: {
            type: Object,
            default: null,
        }
    },
    components: {
        CreateParticipantsSearch,
        CreateParticipantsPossibleList,
        CreateParticipantsConfirm,
        CreateParticipantsMessage,
        CreateParticipantsSelect,
        CreateParticipantsCurrentList
    },
    mounted() {
        window.addEventListener('click', e => {
            if (e.target.classList.contains('modal')) {
                this.$store.dispatch('hideModalCreateParty')
            }
        })
        window.addEventListener('click', e => {
            if (e.target.classList.contains('party__modal-search')
                || e.target.classList.contains('room__modal-title')
                || e.target.classList.contains('party__modal-user')
                || e.target.classList.contains('party__message')
                || e.target.classList.contains('party__modal-window')
                || e.target.classList.contains('party__modal-content')
                || e.target.classList.contains('modal')) {
                this.$store.dispatch('hideWindowUsersList')
            }
            if (e.target.classList.contains('modal__close')
                || e.target.classList.contains('party__modal')) {
                this.$store.dispatch('clearUserFromPartyList')
            }
        })
    },
    computed: {
        partyUsers() {
            return this.$store.getters.partyUsers;
        }
    },
}
