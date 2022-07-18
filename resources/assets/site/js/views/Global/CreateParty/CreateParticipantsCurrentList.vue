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
                        <span v-if="isParticipant(participant.user.id)">
                            (Вы)
                        </span>
                    </div>
                    <div class="party__item-nick">
                        @nickName
                    </div>
                </div>
                <div class="party__current-select"
                     :class="{disabled: false}">
                    <CreateParticipantsSelect :currentRole="participant.role"
                                              :partyUser="participant.user"
                                              :parent="'currentParty'"
                                              :selectNewRole="true"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import CreateParticipantsSelect from "./CreateParticipantsSelect";
import {initialMixin} from "../../../mixins/initialMixin";

export default {
    name: "CreateParticipantsCurrentList",
    data: () => ({
        participants: null
    }),
    components: {CreateParticipantsSelect},
    mixins: [initialMixin],
    mounted() {
        this.$store.dispatch('getParticipantsInDesk')
        this.participants = this.deskParticipants
        console.log(this.participants)
    },
    methods: {
        isParticipant(id) {
            let participants = this.getSpace().participants
            let party = participants.find(el => el.user['id'] === id)
            return party.user.id === this.$store.getters.user.id
        },
        getSpace() {
            switch (this.$route.name) {
                case 'party':
                    return this.$store.getters.room;
                case 'lists':
                    return this.$store.getters.desk
            }
        }
    },
    computed: {
        desk() {
            return this.$store.getters.desk
        },
        deskParticipants() {
            return this.$store.getters.deskParticipants
        }
    },
}
</script>
