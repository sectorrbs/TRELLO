<template>
    <div class="settings__item" @click.prevent="this.$emit('open', $event)">
        <div class="settings__item-btn party__settings-tab"
             :class="{show: !showDelete}">
            <Fa :type="'r'"
                :name="'user-shield party__settings-icon green'"/>
            Назначить администратором
        </div>
        <Alert class="desks__item-alert party__settings-alert" :class="{show: showDelete}">
            <template v-slot:alert_title>
                Назначить учатника рабочего пространства администратором
                <br>
                Участник получит все права администратора, в том числе права на удаление рабочего пространства, а также
                на присвоение другим участникам рабочего пространства прав администратора
            </template>
            <template v-slot:alert_confirm>
                <div class="party__settings-btns party__settings-confirm" @click="appointmentAdminRoomParty">
                    Назначить администратором
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
    name: "ParticipantsSettingsStatusAdmin",
    mixins: [settingsRoomPartyMixin],
    methods: {
        appointmentAdminRoomParty() {
            this.$store.dispatch('appointmentAdminRoomParty', this.participant.id)
        },
    },
}
</script>
