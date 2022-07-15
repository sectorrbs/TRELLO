<template>
    <div class="settings__item" @click.prevent="this.$emit('open', $event)">
        <div class="settings__item-btn party__settings-tab"
             :class="{show: !showDelete, disabled: countAdmins}">
            <Fa :type="'r'"
                :name="'sign-out party__settings-icon blue'"/>
            Покинуть пространство
        </div>
        <Alert class="desks__item-alert  party__settings-alert" :class="{show: showDelete}">
            <template v-slot:alert_title>
                Вы действительно хотите покинуть это пространство?
                <br>
                В дальнейшем вернуться в пространство можно будет только в том случае, если Вас пригласят
            </template>
            <template v-slot:alert_confirm>
                <div class="party__settings-btns party__settings-confirm" @click="leaveRoomParty">
                    Покинуть пространство
                </div>
            </template>
            <template v-slot:alert_cancel>
                <div class="party__settings-btns party__settings-cancel"
                     @click.prevent.stop="this.$emit('closed')">
                    Назад
                </div>
            </template>
        </Alert>
    </div>
</template>

<script>

import {settingsRoomPartyMixin} from "../../../../../../mixins/settingsRoomPartyMixin";

export default {
    name: "ParticipantsSettingsList",
    mixins: [settingsRoomPartyMixin],
    methods: {
        leaveRoomParty() {
            this.$store.dispatch('leaveRoomParty', this.participant.id)
        }
    }
}
</script>
