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
        <div class="details__window-checklist-more">
            <ActionCardBtn class="card-create-field" v-if="!field" @click="toggleCreateField">
                Добавить элемент
            </ActionCardBtn>
            <CardCheckListCreateField v-else/>
        </div>
    </div>
</template>

<script>

import ActionCardBtn from './Actions/ActionСardBtn'
import CardActionModal from './Actions/ActionModal'
import CardCheckListCreateField from './CardCheckListCreateField'

export default {
    name: "CardCheckList",
    data: () => ({
        field: false,
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
    components: {ActionCardBtn, CardActionModal, CardCheckListCreateField},
    methods: {
        toggleCreateField() {
            this.field = !this.field
        },
        showDeleteModalCheckList() {
            this.show = !this.show
            this.field = false
        },
        deleteCheckList(){
            this.$store.dispatch('deleteCheckList', this.checkList)
            this.$refs.checklist.remove()
        }
    },
}
</script>

<style scoped>

</style>
