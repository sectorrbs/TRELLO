<template>
    <div v-if="partyUsers.length" class="party__actions">
        <div class="party__actions-top">
            <CreateParticipantsList :partyUsers="partyUsers"/>
            <CreateParticipantsConfirm @confirm="sendInvite"/>
        </div>
        <div class="party__actions-message">
            <CreateParticipantsMessage v-model="message" :partyUsers="partyUsers"/>
        </div>
    </div>
    <CreateParticipantsSearch/>
</template>

<script>

import CreateParticipantsSearch from './Components/CreateParticipantsSearch'
import CreateParticipantsList from './Components/CreateParticipantsList'
import CreateParticipantsConfirm from './Components/CreateParticipantsConfirm'
import CreateParticipantsMessage from './Components/CreateParticipantsMessage'

export default {
    name: "CreateParticipants",
    data() {
        return {
            text: null,
            message: null
        }
    },
    components: {
        CreateParticipantsSearch,
        CreateParticipantsList,
        CreateParticipantsConfirm,
        CreateParticipantsMessage
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
    methods: {
        sendInvite() {
            let params = {
                roomId: this.$store.getters.room.id,
                message: this.message,
                users: this.partyUsers
            }
            this.$store.dispatch('sendInviteToParty', params)
        }
    },
}
</script>

