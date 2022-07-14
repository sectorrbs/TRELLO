<template>
    <div class="settings" @click.prevent>
        <div class="settings__title party__settings-title" @click.prevent>
            Действия с пользователем
        </div>
        <div class="settings__items">
            <ParticipantsSettingsLeave v-if="isUser" @open="showTab"
                                       :countAdmins="participantsAdminsCount"
                                       @closed="closedTabs"/>
            <ParticipantsSettingsExclude v-if="statusUser && !isUser"
                                         :participant="participant"
                                         @open="showTab"
                                         @closed="closedTabs"/>
            <ParticipantsSettingsChangeStatus v-if="userRoleAdmin && !isParticipantStatusAdmin"
                                              :participant="participant"
                                              @open="showTab"
                                              @closed="closedTabs"/>
        </div>
    </div>
</template>

<script>

import {cardMixin} from "../../../../../mixins/cardMixin";
import {settingsMixin} from "../../../../../mixins/settingsMixin";
import ParticipantsSettingsLeave from './Settings/ParticipantsSettingsLeave'
import ParticipantsSettingsExclude from './Settings/ParticipantsSettingsExclude'
import ParticipantsSettingsChangeStatus from './Settings/ParticipantsSettingsChangeStatus'

export default {
    name: "ParticipantsSettings",
    data: () => ({
        show: false,
    }),
    props: ['participant'],
    components: {ParticipantsSettingsLeave, ParticipantsSettingsExclude, ParticipantsSettingsChangeStatus},
    methods: {},
    mixins: [cardMixin, settingsMixin],
}
</script>

