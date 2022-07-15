<template>
    <div class="settings__item" @click.prevent="this.$emit('open', $event)">
        <div class="settings__item-btn party__settings-tab"
             :class="{show: !showDelete, disabled: countAdmins}">
            <Fa :type="'r'"
                :name="'user-minus party__settings-icon green'"/>
            Назначить наблюдателем
        </div>
        <Alert class="desks__item-alert party__settings-alert" :class="{show: showDelete}">
            <template v-slot:alert_title>
                Назначить учатника рабочего пространства гостем
                <br>
                Участник получит возможность просматривать доски и оставлять комментарии
            </template>
            <template v-slot:alert_confirm>
                <div class="party__settings-btns party__settings-confirm" @click="appointmentGuestRoomParty">
                    Назначить гостем
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
    name: "ParticipantsSettingsStatusGuest",
    mixins: [settingsRoomPartyMixin],
    methods: {
        appointmentGuestRoomParty() {
            this.$store.dispatch('appointmentGuestRoomParty', this.participant.id)
        },
    },
}
</script>
