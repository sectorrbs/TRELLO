<template>
    <div class="desks__info-participants desks__participants">
        <div class="desks__info-wrapper">
            <div class="desks__participants"
                 v-for="participant in participants">
                <div class="desks__participants-logo">
                  <span>
                       {{ getInitials(participant.user.name) }}
                  </span>
                    <img :src="'/storage/common/chevron.png'"
                         v-if="isUserAdmin(participant.role.status)"
                         class="desks__participants-icon">
                </div>
            </div>
            <div class="desks__participants-add"
                 @click="this.$store.dispatch('openModalCreateParty')"
                :class="{disabled: isGuest}">
                Пригласить
            </div>
        </div>
    </div>
</template>

<script>

import {deskListMixin} from "../../../../../mixins/deskListMixin";
import {initialMixin} from "../../../../../mixins/initialMixin";


export default {
    name: "DeskInfoParticipants",
    props: ['participants'],
    mixins: [initialMixin, deskListMixin],
    methods: {
        isUserAdmin(status) {
            return status === 'admin'
        }
    },
}
</script>
