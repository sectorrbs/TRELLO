<template>
    <div class="settings" @click.prevent>
        <div class="settings__title" @click.prevent>
            Действия с пользователем
        </div>
        <div class="settings__items">
            <ParticipantsSettingsLeave v-if="isAdmin" @open="showTab"
                                       @closed="closedTabs"/>
        </div>
    </div>
</template>

<script>

import {cardMixin} from "../../../../../mixins/cardMixin";
import {settingsWindowMixin} from "../../../../../mixins/settingsWindowMixin";
import ParticipantsSettingsLeave from './Settings/ParticipantsSettingsLeave'

export default {
    name: "ParticipantsSettings",
    data: () => ({
        show: false,
    }),
    props: ['participant'],
    components: {ParticipantsSettingsLeave},
    methods: {
        openSettings() {

        },
    },
    mixins: [cardMixin, settingsWindowMixin],
    computed: {
        isAdmin() {
            return this.participant.role.status === 'admin'
        }
    },
}
</script>

