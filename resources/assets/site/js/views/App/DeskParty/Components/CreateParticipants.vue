<template>
    <div v-if="partyUsers.length" class="party__actions">
        <div class="party__actions-top">
            <CreateParticipantsPossibleList :partyUsers="partyUsers"/>
            <div class="party__actions-btns">
                <CreateParticipantsSelect :parent="'possibleParty'"/>
                <CreateParticipantsConfirm @confirm="sendInvite"/>
            </div>
        </div>
        <div class="party__actions-message">
            <CreateParticipantsMessage v-model="message" :partyUsers="partyUsers"/>
        </div>
    </div>
    <CreateParticipantsSearch/>
    <CreateParticipantsCurrentList/>
</template>

<script>

import {createPartyMixin} from "../../../../mixins/createPartyMixin";

export default {
    name: "CreateParticipants",
    mixins: [createPartyMixin],
    props: {
        desk: {
            type: Object,
            default: null,
        }
    },
    methods: {
        sendInvite() {
            let params = {
                role: +document.querySelector('[data-select-role]').dataset.selectRole,
                roomId: this.$store.getters.desk.room_id,
                deskId: this.$store.getters.desk.id,
                message: this.message,
                users: this.partyUsers
            }
            this.$store.dispatch('sendInviteToDeskParty', params)
        }
    }
}
</script>

