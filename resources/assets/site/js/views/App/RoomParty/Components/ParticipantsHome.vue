<template>
    <div class="party__item">
        <div class="party__item-logo">
           <span>
            {{ getInitials(participant.user.name) }}
           </span>
            <img :src="'/storage/common/chevron.png'"
                 v-if="partyCreator === participant.user.id"
                 class="party__item-rang">
        </div>
        <div class="party__item-name">
            <div>
                {{ participant.user.name }}
                <span v-if="isUser">
                (Вы)
            </span>
            </div>
            <div class="party__item-nick">
                @nickName
            </div>
        </div>
        <div class="party__item-actions" ref="actionsParty">
            <div class="party__item-status" :class="[participant.role.status]">
                {{ participant.role.label }}
            </div>
            <Fa :type="'l'"
                v-if="(!isParticipantStatusAdmin || userRoleAdmin) && !isGuest"
                @click.prevent.stop="showSettingsList"
                :name="'cog room__empty-icon party__settings-btn'"/>
            <div class="desks__list-settings party__settings">
                <ParticipantsSettings :participant="participant"/>
            </div>
        </div>
    </div>
</template>

<script>

import ParticipantsSettings from './Components/ParticipantsSettings'
import {initialMixin} from "../../../../mixins/initialMixin";
import {settingsRoomPartyMixin} from "../../../../mixins/settingsRoomPartyMixin";

export default {
    name: "Participants",
    components: {ParticipantsSettings},
    methods: {
        showSettingsList() {

            let btn = this.$refs.actionsParty.querySelector('.party__settings-btn')
            let list = this.$refs.actionsParty.querySelector('.party__settings')

            if (btn.classList.contains('open')) {
                btn.classList.remove('open')
                list.classList.remove('open')
            } else {
                this.$closed('settings')
                btn.classList.add('open')
                list.classList.add('open')
            }
        }
    },
    mixins: [initialMixin, settingsRoomPartyMixin],
    computed: {
        partyCreator() {
            return this.$store.getters.room.user_id
        }
    }
}
</script>
