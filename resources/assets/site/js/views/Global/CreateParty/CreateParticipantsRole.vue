<template>
    <div class="party__select-item"
         @click="this.$emit('selectRole', $event, role.id)"
         v-show="roleIsDefault !== role.label"
         :data-role="role.label">
        {{ role.label }}
    </div>
</template>

<script>
export default {
    name: "CreateParticipantsRole",
    props: ['role', 'roleIsDefault', 'user'],
}
</script>
