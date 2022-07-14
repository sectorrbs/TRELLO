<template>
    <div class="party__item">
        <div class="party__item-logo">
           <span>
            {{ getInitials(participant.user.name) }}
           </span>
        </div>
        <div class="party__item-name">
            {{ participant.user.name }}
            <div class="party__item-nick">
                @nickName
            </div>
        </div>
        <div class="party__item-actions" ref="actionsParty">
            <div class="party__item-status" :class="{admin: isAdmin}" @click="">
                {{ participant.role.label }}
            </div>
            <Fa :type="'l'"
                v-if="!isParticipantStatusAdmin"
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
import {settingsMixin} from "../../../../mixins/settingsMixin";

export default {
    name: "Participants",
    props: ['participant'],
    components: {ParticipantsSettings},
    computed: {
        isAdmin() {
            return this.participant.role.status === 'admin'
        }
    },
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
    mixins: [initialMixin, settingsMixin],
}
</script>
