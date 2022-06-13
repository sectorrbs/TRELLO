<template>
    <div class="details__window-checklist-more" ref="cardCreateTask">
        <ActionCardBtn class="card-create-field" v-if="!field" @click="toggleCreateField">
            Добавить элемент
        </ActionCardBtn>
        <CheckListCreateField @hidden="field = false" :check_lists_id="check_lists_id" v-else/>
    </div>
</template>

<script>

import ActionCardBtn from './Actions/ActionСardBtn'
import CheckListCreateField from '../../CheckLists/Components/CheckListCreateField'

export default {
    name: "CardCreateTask",
    data: () => ({
        field: false,
    }),
    props: ['check_lists_id'],
    components: {ActionCardBtn, CheckListCreateField},
    mounted() {
        window.addEventListener('click', (e) => {
            if (!e.target.classList.contains('details__window-checklist-input') &&
                !e.target.classList.contains('card-create-field') &&
                !e.target.classList.contains('create-task-btn')) {
                this.field = false
            }
        })
    },
    methods: {
        toggleCreateField() {
            this.field = !this.field
        },
    },
}
</script>
