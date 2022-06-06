<template>
    <div class="details__window-checklist-create">
        <textarea @keydown.stop="enterSubmit" v-model="taskName" type="text" class="details__window-checklist-input"
                  placeholder="Добавить элемент"></textarea>
        <div class="details__window-checklist-btns">
            <ActionCardBtn :class="{disabled:!taskName}" class="create-task-btn blue" @click.prevent="createTask">
                Добавить
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
    name: "CheckListCreateField",
    components: {ActionCardBtn},
    props: ['check_lists_id'],
    data: () => ({
        taskName: null
    }),
    methods: {
        enterSubmit(e) {
            if (e.keyCode === 13) {
                this.createTask()
                setTimeout(() => {
                    this.taskName = ''
                },0)
            }
        },
        createTask() {
            if (this.taskName) {
                this.$store.dispatch('createTask', {
                    name: this.taskName,
                    check_lists_id: this.check_lists_id,
                    card_id: this.$store.getters.cardId
                })
                this.taskName = ''
            }
        }
    },
}
</script>
