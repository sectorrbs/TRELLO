<template>
    <div class="party__item" :class="[isAdmin ? 'admin' : '']">
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
        <div v-if="isAdmin" class="party__item-status">
            <Fa :type="'s'"
                :name="'star party__item-star'"/>
            {{ participant.role.label }}
        </div>
        <div v-else class="party__btn-delete">
            <Fa :type="'l'"
                :name="'times room__empty-icon'"/>
        </div>
    </div>
</template>

<script>

import {initialMixin} from "../../../../mixins/initialMixin";

export default {
    name: "Participants",
    props: ['participant'],
    computed: {
        isAdmin() {
            return this.participant.role.status === 'admin'
        }
    },
    mixins: [initialMixin]
}
</script>
