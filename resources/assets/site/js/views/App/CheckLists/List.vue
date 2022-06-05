<template>
    <div class="details__window-checklist" ref="checklist">
        <div class="details__window-checklist-title">
            <Fa :type="'r'"
                :name="'check-square details__window-icon'"/>
            {{ checkList.name }}
            <ActionCardBtn @click.stop="showDeleteModalCheckList" class="top">
                Удалить
            </ActionCardBtn>
            <CardActionModal :show="show">
                <template v-slot:modal_title>
                    Удаление списка {{ checkList.name }}
                </template>
                <template v-slot:modal_content>
                    <div class="details__actions-modal-text">
                        Удаление списка задач необратимо, и не будет возможности его вернуть.
                    </div>
                    <div class="details__actions-modal-btn delete"
                         @click="deleteCheckList">
                        Удаление списка задач
                    </div>
                </template>
            </CardActionModal>
        </div>
        <Tasks v-if="checkList.tasks?.length"
               :tasks="checkList.tasks"/>
        <CardCreateTask :check_lists_id="checkList.id"/>
    </div>
</template>

<script>

import ActionCardBtn from '../Cards/Components/Actions/ActionСardBtn'
import CardActionModal from '../Cards/Components/Actions/ActionModal'
import Tasks from '../Tasks/Index'
import CheckListCreateField from './Components/CheckListCreateField'
import CardCreateTask from '../Cards/Components/CardCreateTask'

export default {
    name: "CheckList",
    data: () => ({
        show: false
    }),
    props: ['checkList'],
    mounted() {
        window.addEventListener('click', (e) => {
            if (!e.target.classList.contains('details__window-checklist-input') &&
                !e.target.classList.contains('card-create-field')) {
                this.field = false
            }
        })
    },
    components: {ActionCardBtn, CardActionModal, CheckListCreateField, Tasks, CardCreateTask},
    methods: {

        showDeleteModalCheckList() {
            this.show = !this.show
            this.field = false
        },
        deleteCheckList() {
            this.$store.dispatch('deleteCheckList', this.checkList)
        }
    },
}
</script>

<style scoped>

</style>
