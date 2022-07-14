<template>
    <div class="settings__item" @click.prevent="this.$emit('open', $event)">
        <div v-if="!isAdmin"
             class="settings__item-btn party__settings-tab"
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
                <div class="party__settings-btns party__settings-confirm" @click="appointmentAdmin">
                    Назначить
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

import {settingsMixin} from "../../../../../../mixins/settingsMixin";

export default {
    name: "ParticipantsSettingsChangeStatus",
    mixins: [settingsMixin],
    props: ['participant'],
    methods: {
        appointmentAdmin() {
            this.$store.dispatch('appointmentAdmin', this.participant.id)
        },
    },
    computed: {
        isAdmin() {
            return this.participant.role.status === 'admin'
        },
    },
}
</script>
