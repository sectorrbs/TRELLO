<template>
    <div class="details__actions-btn check" @click.stop="actionModal">
        <Fa :type="'r'"
            :name="'file-check details__actions-icon'"/>
        Чек-лист
        <ActionModal :show="show">
            <template v-slot:modal_title>
                Добавление списка задач
            </template>
            <template v-slot:modal_content>
                <div class="details__actions-modal-subtitle">
                    Название
                </div>
                <form @submit.prevent="checkListAdd">
                    <input type="text"
                           class="details__actions-modal-input"
                           placeholder="Введите название списка"
                           v-model="checkListName">
                    <div :class="{disabled: !checkListName}"
                         class="details__actions-modal-btn create"
                         @click="checkListAdd">
                        Добавить
                    </div>
                </form>
            </template>
        </ActionModal>
    </div>
</template>

<script>

import {cardMixin} from "../../../../../mixins/cardMixin";

export default {
    name: "ActionCheckList",
    data: () => ({
        show: false,
        checkListName: 'Чек-лист'
    }),
    mixins: [cardMixin],
    components: {},
    props: ['cardInfo'],
    methods: {
        checkListAdd() {
            this.$store.dispatch('createCheckList', {name: this.checkListName, card_id: this.cardInfo.id})
            this.$closed()
        },
    },
}
</script>
