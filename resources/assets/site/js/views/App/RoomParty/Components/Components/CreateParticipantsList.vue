<template>
    <div class="party__lists">
        <div class="party__list"
             v-for="partyUser in partyUsers"
             :key="partyUser.id">
            <span>
                {{ partyUser.name }}
            </span>
            <Fa :type="'s'"
                @click="this.$store.dispatch('removeUserToParty', partyUser.id)"
                :name="'times party__list-icon'"/>
        </div>
    </div>

</template>

<script>
export default {
    name: "CreateParticipantsList",
    props: ['partyUsers']
}
</script>
