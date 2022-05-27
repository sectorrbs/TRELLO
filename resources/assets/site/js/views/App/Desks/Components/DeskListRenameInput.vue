<template>
    <div :class="{show : show}" class="desks__item-rename">
        <div class="desks__item-btns">
            <Fa :type="'r'"
                @click.prevent
                :name="'check desks__item-confirm'"/>
            <Fa :type="'l'"
                @click.prevent="cancelRenameDesk"
                :name="'times desks__item-cancel'"/>
        </div>
        <input
            ref="input"
            type="text"
            @blur="updateList"
            class="desks__item-input"
            :value="modelValue"
            :class="{show : show}"
            @input="updateInput"
            @click.prevent>
        <Error v-if="v$.name.$error" class="desks__item-error" :error="'Название не указано'"/>

    </div>
</template>

<script>

import {required} from '@vuelidate/validators'
import {useVuelidate} from '@vuelidate/core'

export default {
    name: "DeskRenameInput",
    data: () => ({
        v$: useVuelidate(),
        name: null,
    }),
    props: ['modelValue', 'show', 'list', 'old_name'],
    updated(){
        this.$refs.input.focus()
    },
    methods: {
        updateList() {
            this.name = this.list.name
            this.v$.$touch()
            if (!this.v$.$error) {
                this.$store.dispatch('updateList', this.list)
            } else {
                this.cancelRenameDesk()
            }
            setTimeout(() => {
                this.$emit('editShow')
            }, 100)
        },
        updateInput(e) {
            this.$emit('update:modelValue', e.target.value)
            this.name = this.list.name
            this.v$.$touch()
            this.$emit('rename')
        },
        cancelRenameDesk() {
            this.$emit('update:modelValue', this.old_name)
            this.$emit('editShow')
            this.v$.$reset()
        }
    },
    validations() {
        return {
            name: {required},
        }
    }
}
</script>

<style scoped>

</style>
