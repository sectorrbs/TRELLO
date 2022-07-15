<template>
    <div class="settings" @click.prevent>
        <div class="settings__title party__settings-title" @click.prevent>
            Действия с пользователем
        </div>
        <div class="settings__items">
            <ParticipantsSettingsStatusAdmin v-if="userRoleAdmin && !isParticipantStatusAdmin"
                                             :participant="participant"
                                             :countAdmins="participantsAdminsCount"
                                             @open="showTab"
                                             @closed="closedTabs"/>
            <ParticipantsSettingsStatusRegular v-if="userRoleAdmin && !isParticipantStatusRegular"
                                               :participant="participant"
                                               :countAdmins="participantsAdminsCount"
                                               @open="showTab"
                                               @closed="closedTabs"/>
            <ParticipantsSettingsStatusGuest v-if="userRoleAdmin && !isParticipantStatusGuest"
                                             :participant="participant"
                                             :countAdmins="participantsAdminsCount"
                                             @open="showTab"
                                             @closed="closedTabs"/>
            <ParticipantsSettingsLeave v-if="isUser" @open="showTab"
                                       :countAdmins="participantsAdminsCount"
                                       :participant="participant"
                                       @closed="closedTabs"/>
            <ParticipantsSettingsExclude v-if="statusUser && !isUser"
                                         :participant="participant"
                                         @open="showTab"
                                         @closed="closedTabs"/>
        </div>
    </div>
</template>

<script>

import {cardMixin} from "../../../../../mixins/cardMixin";
import {settingsRoomPartyMixin} from "../../../../../mixins/settingsRoomPartyMixin";
import ParticipantsSettingsLeave from './Settings/ParticipantsSettingsLeave'
import ParticipantsSettingsExclude from './Settings/ParticipantsSettingsExclude'
import ParticipantsSettingsStatusAdmin from './Settings/ParticipantsSettingsStatusAdmin'
import ParticipantsSettingsStatusRegular from './Settings/ParticipantsSettingsStatusRegular'
import ParticipantsSettingsStatusGuest from './Settings/ParticipantsSettingsStatusGuest'

export default {
    name: "ParticipantsSettings",
    data: () => ({
        show: false,
    }),
    components: {
        ParticipantsSettingsLeave,
        ParticipantsSettingsExclude,
        ParticipantsSettingsStatusAdmin,
        ParticipantsSettingsStatusRegular,
        ParticipantsSettingsStatusGuest
    },
    methods: {},
    mixins: [cardMixin, settingsRoomPartyMixin],
}
</script>

