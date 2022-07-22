<template>
    <div class="details__window-checklist-create">
        <textarea ref="descrInput"
                  :value="descr"
                  @input="editDescription"
                  type="text"
                  class="details__window-checklist-input card-description"
                  placeholder="Добавить более подробное описание..."></textarea>
        <div class="details__window-checklist-btns">
            <ActionCardBtn :class="{disabled: !description}"
                           class="create-task-btn blue"
                           @click="createDescription">
                Обновить
            </ActionCardBtn>
            <ActionCardBtn class="transparent">
                Отмена
            </ActionCardBtn>
        </div>
    </div>
</template>

<script>

import ActionCardBtn from '../../Cards/Components/Actions/ActionСardBtn'

export default {
    name: "CardAddDescriptionField",
    components: {ActionCardBtn},
    props: ['card', 'descr'],
    data: () => ({
        description: true
    }),
    methods: {
        editDescription(e) {
            this.$emit('update:modelValue', e.target.value)
        },
        createDescription() {
            this.$emit('hidden')
            if (this.$refs.descrInput) {
                this.card.description = this.$refs.descrInput.value
            }
            this.$store.dispatch('updateCard', this.card)
        },
    },
}
</script>
