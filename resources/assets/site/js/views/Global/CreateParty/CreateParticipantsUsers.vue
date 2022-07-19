<template>
    <div class="party__modal-users"
         v-for="user in users"
         :key="user.id">
        <div class="party__modal-user"
             :class="{disabled: isParticipant(user.id)}"
             @click="addUserToPartyList(user)">
            <div class="party__modal-logo">
                <div class="party__modal-initials">
                    {{ getInitials(user.name) }}
                </div>
            </div>
            <div class="party__modal-user-info">
                {{ user.name }}
                <div class="party__modal-user-time">
                    Заходил(а) давно
                </div>
            </div>
            <div class="party__modal-user-status">
                <div v-if="isUser(user.id)" class="party__modal-user-your">
                    <span>
                        Вы
                    </span>
                </div>
                <div v-if="isParticipant(user.id)" class="party__modal-user-participant">
                    <span :class="status">
                        {{ label }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {initialMixin} from "../../../mixins/initialMixin";

export default {
    name: "CreateParticipantsUsers",
    data: () => ({
        status: null,
        label: null,
    }),
    props: ['users'],
    emits: ["clearInput"],
    methods: {
        addUserToPartyList(user) {
            this.$store.dispatch('addUserToParty', user)
            this.$emit('clearInput')
            this.$store.dispatch('hideWindowUsersList')
        },
        isUser(id) {
            return id === +localStorage.getItem('user_id')
        },
        isParticipant(id) {
            let participants = this.getSpace().participants
            let party = participants.find(el => el.user['id'] === id)
            if (party) {
                this.label = party.role.label
                this.status = party.role.status
            }
            return participants.find(el => el.user['id'] === id)
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
    mixins: [initialMixin],
}
</script>
