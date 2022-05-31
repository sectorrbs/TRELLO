<template>
    <div class="details__actions-btn delete" @click.stop="showModalDelete">
        <Fa :type="'r'"
            :name="'minus details__actions-icon'"/>
        Удалить
        <div class="details__actions-modal" :class="{show}">
            <div class="details__actions-modal-top">
                <div class="details__actions-modal-title">
                    Удаление карточки
                </div>
                <div class="details__actions-modal-close">
                    <Fa :type="'l'"
                        :name="'times'"/>
                </div>
            </div>
            <div class="details__actions-modal-text">
                Все действия будут удалены из ленты, и вы не сможете повторно открыть карточку. Отмена невозможна.
            </div>
            <div class="details__actions-modal-btn" @click="this.$store.dispatch('deleteCard', cardInfo)">
                Удалить
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "ActionDelete",
    data: () => ({
        show: false
    }),
    props: ['cardInfo'],
    mounted() {
        window.addEventListener('click', () => this.show = !this.show)
    },
    methods: {
        showModalDelete() {
            this.show = !this.show
        }
    },
}
</script>
