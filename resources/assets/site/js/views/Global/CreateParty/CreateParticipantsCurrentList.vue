<template>
    <div class="party__currents" v-if="desk">
        <div v-for="participant in desk.participants"
             class="party__current"
             :key="participant.id">
            <div class="party__current-item party__item">
                <div class="party__item-logo">
                    <span>
                        {{ getInitials(participant.user.name) }}
                    </span>
                </div>
                <div class="party__item-name">
                    <div>
                        {{ participant.user.name }}
                        <span v-if="isUser(participant.user.id)">
                            (Вы)
                        </span>
                    </div>
                    <div class="party__item-nick">
                        @nickName
                    </div>
                </div>
                <div class="party__current-select"
                     :class="{disabled: getDisabled(participant.user.id)}">
                    <CreateParticipantsDeskSelect :participant="participant"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import CreateParticipantsDeskSelect from "./CreateParticipantsDeskSelect";
import {initialMixin} from "../../../mixins/initialMixin";

export default {
    name: "CreateParticipantsCurrentList",
    data: () => ({
        disabled: null
    }),
    components: {CreateParticipantsDeskSelect},
    mixins: [initialMixin],
    methods: {
        isUser(id) {
            let participants = this.desk.participants
            let party = participants.find(el => el.user['id'] === id)
            return party.user.id === this.$store.getters.user?.id
        },
        getDisabled(id) {
            if (this.$store.getters.userRoleAdminInDesk) {
                if (this.isUser(id)) {
                    if (this.$store.getters.countAdminsInDesk < 2) {
                        return true
                    }
                } else {
                    return false
                }
            } else {
                return true
            }
        }
    },
    computed: {
        desk() {
            return this.$store.getters.desk
        },
    },
}
</script>
<!--userRoleAdminInDesk-->
<!--countAdminsInDesk-->
