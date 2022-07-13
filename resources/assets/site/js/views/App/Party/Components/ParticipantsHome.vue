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
        <div class="party__item-actions">
            <div class="party__item-status" :class="{admin: isAdmin}" @click="">
                {{ participant.role.label }}
            </div>
            <ParticipantsSettings/>
        </div>
    </div>
</template>

<script>

import {initialMixin} from "../../../../mixins/initialMixin";
import ParticipantsSettings from './Components/ParticipantsSettings'

export default {
    name: "Participants",
    props: ['participant'],
    components: {ParticipantsSettings},
    computed: {
        isAdmin() {
            return this.participant.role.status === 'admin'
        }
    },
    mixins: [initialMixin]
}
</script>
