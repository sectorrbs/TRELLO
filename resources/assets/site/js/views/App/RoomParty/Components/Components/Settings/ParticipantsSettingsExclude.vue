<template>
    <div class="settings__item" @click.prevent="this.$emit('open', $event)">
        <div class="settings__item-btn party__settings-tab" :class="{show: !showDelete}">
            <Fa :type="'r'"
                :name="'ban party__settings-icon red'"/>
            Исключить из пространства
        </div>
        <Alert class="desks__item-alert party__settings-alert" :class="{show: showDelete}">
            <template v-slot:alert_title>
                Закрыть участнику доступ к рабосему пространству.
                <br>
                Он останется на всех своих досках в рабочем пространстве и получит уведомление
            </template>
            <template v-slot:alert_confirm>
                <div class="party__settings-btns party__settings-confirm" @click="excludeParticipantRoomParty">
                    Исключить
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
    name: "ParticipantsSettingsExclude",
    mixins: [settingsRoomPartyMixin],
    methods: {
        excludeParticipantRoomParty() {
            this.$store.dispatch('excludeParticipantRoomParty', this.participant.id)
        }
    }
}
</script>
