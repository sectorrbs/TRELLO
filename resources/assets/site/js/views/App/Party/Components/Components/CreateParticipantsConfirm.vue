<template>
    <div class="party__confirm" @click="this.$emit('confirm')">
        Отправить приглашения
    </div>
</template>

<script>
export default {
    name: "CreateParticipantsConfirm"
}
</script>
