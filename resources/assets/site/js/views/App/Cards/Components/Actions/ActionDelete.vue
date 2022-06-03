<template>
    <div class="details__actions-btn delete" @click.stop="show=!show">
        <Fa :type="'r'"
            :name="'minus details__actions-icon'"/>
        Удалить
        <CardActionModal :show="show">
            <template v-slot:modal_title>
                Удалить карточку
            </template>
            <template v-slot:modal_content>
                <div class="details__actions-modal-text">
                    Все действия будут удалены из ленты, и вы не сможете повторно открыть карточку. Отмена невозможна.
                </div>
                <div class="details__actions-modal-btn delete" @click="cardDelete">
                    Удалить
                </div>
            </template>
        </CardActionModal>
    </div>
</template>

<script>

import CardActionModal from './ActionModal'

export default {
    name: "ActionDelete",
    data: () => ({
        show: false
    }),
    components: {CardActionModal},
    props: ['cardInfo'],
    methods: {
        cardDelete() {
            this.$store.dispatch('closeModal')
            this.$store.dispatch('deleteCard', this.cardInfo)
        }
    },
}
</script>
