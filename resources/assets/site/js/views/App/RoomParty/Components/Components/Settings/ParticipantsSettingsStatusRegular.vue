<template>
    <div class="settings__item" @click.prevent="this.$emit('open', $event)">
        <div class="settings__item-btn party__settings-tab"
             :class="{show: !showDelete, disabled: countAdmins}">
            <Fa :type="'r'"
                :name="'user party__settings-icon green'"/>
            Назначить участником
        </div>
        <Alert class="desks__item-alert party__settings-alert" :class="{show: showDelete}">
            <template v-slot:alert_title>
                Назначить учатника рабочего стандартным пользователем
                <br>
                Участник получит возможность редактировать доски и карточки в рабочем пространстве. Участник не сможет
                приглашать других пользователей в рабочее пространство
            </template>
            <template v-slot:alert_confirm>
                <div class="party__settings-btns party__settings-confirm" @click="appointmentRegularRoomParty">
                    Назначить участником
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
    name: "ParticipantsSettingsStatusRegular",
    mixins: [settingsRoomPartyMixin],
    methods: {
        appointmentRegularRoomParty() {
            this.$store.dispatch('appointmentRegularRoomParty', this.participant.id)
        },
    },
}
</script>
