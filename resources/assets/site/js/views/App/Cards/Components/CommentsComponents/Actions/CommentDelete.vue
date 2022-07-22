<template>
    <div class="comments__item-action delete" @click.stop="show=!show">
        Удалить
        <ActionModal :show="show">
            <template v-slot:modal_title>
                Удалить комментарий
            </template>
            <template v-slot:modal_content>
                <div class="details__actions-modal-text">
                    Комментарий удаляется навсегда. Отмена невозможна.
                </div>
                <div class="details__actions-modal-btn delete" @click="commentDelete">
                    Удалить
                </div>
            </template>
        </ActionModal>
    </div>
</template>

<script>
export default {
    name: "CommentDelete",
    data: () => ({
        show: false
    }),
    props: ['comment_id'],
    methods: {
        commentDelete() {
            this.$store.dispatch('deleteComment',
                {id: this.comment_id, card_id: this.$store.getters.cardInfo.id})
        }
    },
}
</script>
