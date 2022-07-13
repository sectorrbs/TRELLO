<template>
    <div class="party__item" :class="[isAdmin ? 'admin' : '']">
        <div class="party__item-logo">
            <Fa :type="'s'"
                :name="'user-alt party__item-icon'"/>
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
export default {
    name: "Participants",
    props: ['participant'],
    computed: {
        isAdmin() {
            return this.participant.role.status === 'admin'
        }
    }
}
</script>
