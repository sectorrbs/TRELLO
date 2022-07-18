<template>
    <textarea type="text"
              :value="modelValue"
              @input="updateInput"
              class="party__message"
              placeholder="Приглашаю в рабочее пространство Rafaello — давайте работать с ним вместе!"></textarea>
</template>

<script>
export default {
    name: "CreateParticipantsMessage",
    props: ['modelValue'],
    methods: {
        updateInput(e){
            this.$emit('update:modelValue', e.target.value)
        }
    }
}
</script>
