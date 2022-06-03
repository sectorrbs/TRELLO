<template>
    <div class="details__actions-btn check" @click.stop="actionModal">
        <Fa :type="'r'"
            :name="'file-check details__actions-icon'"/>
        Чек-лист
        <CardActionModal :show="show">
            <template v-slot:modal_title>
                Добавление списка задач
            </template>
            <template v-slot:modal_content>
                <div class="details__actions-modal-subtitle">
                    Название
                </div>
                <input type="text"
                       class="details__actions-modal-input"
                       placeholder="Введите название списка"
                       v-model="checkListName">
                <div :class="{disabled: !checkListName}"
                     class="details__actions-modal-btn create"
                     @click="checkListAdd">
                    Добавить
                </div>
            </template>
        </CardActionModal>
    </div>
</template>

<script>

import CardActionModal from './ActionModal'

export default {
    name: "ActionCheckList",
    data: () => ({
        show: false,
        checkListName: 'Чек-лист'
    }),
    components: {CardActionModal},
    props: ['cardInfo'],
    methods: {
        checkListAdd() {
            this.$store.dispatch('createCheckList', {name: this.checkListName, card_id: this.cardInfo.id})
        },
        actionModal(e) {
            if (!e.target.classList.contains('details__actions-modal-input') &&
                !e.target.classList.contains('details__actions-modal-btn')) {
                this.show = !this.show
            }
        }
    },
}
</script>

<style scoped>

</style>
