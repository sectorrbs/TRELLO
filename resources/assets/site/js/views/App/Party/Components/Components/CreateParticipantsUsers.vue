<template>
    <div class="party__modal-users"
         v-for="user in users"
         :key="user.id">
        <div class="party__modal-user" @click="addUserToPartyList(user)">
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
                        ВЫ
                    </span>
                </div>
                <div v-if="isParticipant(user.id)" class="party__modal-user-participant">
                    <span>
                        УЧАСТНИК
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {initialMixin} from "../../../../../mixins/initialMixin";

export default {
    name: "CreateParticipantsUsers",
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
            let participants = this.$store.getters.room.participants
            console.log(participants)
            return participants.find(el => el.user['id'] === id)
        }
    },
    mixins: [initialMixin],
}
</script>
