<template>
    <div class="party__modal-users"
         v-for="user in users"
         :key="user.id">
        <div class="party__modal-user" @click="addUserToPartyList(user)">
            {{ user.name }}
        </div>
    </div>
</template>

<script>
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

    }
}
</script>
