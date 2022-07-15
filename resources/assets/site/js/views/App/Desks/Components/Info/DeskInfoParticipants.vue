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
                 :class="{disabled: isUserGuest}">
                Пригласить
            </div>
        </div>
    </div>
</template>

<script>

import {initialMixin} from '../../../../../mixins/initialMixin'
import {deskListMixin} from "../../../../../mixins/deskListMixin";

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
