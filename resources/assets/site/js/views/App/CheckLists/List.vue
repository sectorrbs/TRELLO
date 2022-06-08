<template>
    <div class="details__window-checklist" ref="checklist">
        <div class="details__window-checklist-title" @click="renameCheckListShowField">
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
                         @click.stop="deleteCheckList">
                        Удаление списка задач
                    </div>
                </template>
            </CardActionModal>
        </div>

        <CheckListRenameField @hideField="renameCheckListHideField"
                              :oldName="checkList.name"
                              :checkList="checkList"/>

        <Scale v-if="percent !== -1" :percent="percent"/>
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
import CheckListRenameField from './Components/CheckListRenameField'
import CardCreateTask from '../Cards/Components/CardCreateTask'
import Scale from './Components/CheckListScale'

export default {
    name: "CheckList",
    data: () => ({
        show: false
    }),
    props: ['checkList'],
    mounted() {
        setTimeout(() => {
            window.addEventListener('click', (e) => {
                if (!e.target.classList.contains('details__window-checklist-input') &&
                    !e.target.classList.contains('card-create-field')) {
                    this.field = false
                }
            })
        }, 100)
    },
    components: {
        ActionCardBtn,
        CardActionModal,
        CheckListCreateField,
        Tasks,
        CardCreateTask,
        Scale,
        CheckListRenameField
    },
    methods: {
        showDeleteModalCheckList() {
            this.show = !this.show
            this.field = false
        },
        deleteCheckList() {
            this.$store.dispatch('deleteCheckList', this.checkList)
        },
        renameCheckListShowField() {
            this.$closed()
            let input = this.$refs.checklist.querySelector('.details__window-checklist-rename')
            let form = this.$refs.checklist.querySelector('.details__window-checklist-form')
            form.classList.add('show')
            input.focus()
        },
        renameCheckListHideField() {
            this.$closed()
        },
    },
    computed: {
        percent() {
            let scales = this.$store.getters.percentPerformedTasks
            return Math.round(scales.find(el => el.id === this.checkList.id)?.percent) ?? null
        },
    },
}
</script>
