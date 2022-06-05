<template>
    <div class="tasks__item" ref="taskItem">
        <div class="tasks__item-checkbox">
            <input type="checkbox" class="custom-checkbox" :id="task.name" :name="task.name" value="yes">
            <label :for="task.name"></label>
        </div>
        <div class="tasks__item-inner">
            <div class="tasks__item-name" @click="renameTaskShowField">
                {{ task.name }}
            </div>
            <TaskRenameField @closeField="renameTaskHideField" v-model="taskName" :task="task"/>
            <div class="tasks__item-settings" :class="{show}" @click.stop="showSettingsTask">
                <Fa :type="'s'"
                    :name="'ellipsis-h tasks__item-settings-icon'"/>
            </div>
            <div class="tasks__item-modal">
                <CardActionModal :show="show">
                    <template v-slot:modal_title>
                        Действия элемента
                    </template>
                    <template v-slot:modal_content>
                        <div class="details__actions-modal-items">
                            <div class="details__actions-modal-item" @click="deleteTask">
                                Удалить
                            </div>
                        </div>
                    </template>
                </CardActionModal>
            </div>
        </div>
    </div>
</template>

<script>

import CardActionModal from '../Cards/Components/Actions/ActionModal'
import TaskRenameField from './Components/TaskRenameField'

export default {
    name: "Items",
    data: () => ({
        show: false,
        taskName: null
    }),
    props: ['task'],
    components: {CardActionModal, TaskRenameField},
    mounted() {
        window.addEventListener('click', e => {
            if (!e.target.classList.contains('tasks__item-input') &&
                !e.target.classList.contains('tasks__item-name')) {
                this.removeClassTaskItems()
            }
        })
    },
    methods: {
        removeClassTaskItems() {
            document.querySelectorAll('.tasks__item')
                .forEach(el => {
                    el.classList.remove('show')
                })
        },
        renameTaskShowField() {
            document.querySelectorAll('.tasks__item')
                .forEach(el => el.classList.remove('show'))
            this.$refs.taskItem.classList.add('show')
            this.$refs.taskItem.querySelector('.tasks__item-input').focus()
            this.taskName = this.task.name
        },
        renameTaskHideField() {
            this.$refs.taskItem.classList.remove('show')
        },
        showSettingsTask(e) {
            this.removeClassTaskItems()
            this.show = !this.show
            setTimeout(() => {
                e.target.closest('.tasks__item-settings').classList.add('show')
            }, 0)
        },
        deleteTask() {
            this.$store.dispatch('deleteTask', {id: this.task.id, card_id: this.$store.getters.cardId})
            this.$refs.taskItem.remove()
        },

    },
}
</script>
