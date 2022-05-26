<template>
    <input type="text"
           :value="modelValue"
           @input="updateInput"
           @blur="this.$emit('update')"
           class="form-input">
</template>

<script>
export default {
    name: "DeskUpdateInput",
    props: ['modelValue'],
    methods: {
        updateInput(e) {
            this.$emit('update:modelValue', e.target.value)
            this.$emit('rename')
        }
    }
}
</script>
