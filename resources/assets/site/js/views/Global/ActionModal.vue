<template>
    <div class="details__actions-modal" ref="cardModal">
        <div class="details__actions-modal-top">
            <div class="details__actions-modal-back">
                <slot name="modal_back"></slot>
            </div>
            <div class="details__actions-modal-title">
                <slot name="modal_title"></slot>
            </div>
            <div class="details__actions-modal-close" @click="showModalDelete">
                <Fa :type="'l'"
                    :name="'times'"/>
            </div>
        </div>
        <slot name="modal_content"></slot>
    </div>
</template>

<script>
export default {
    name: "ActionModal",
    props: ['show'],
    methods: {
        showModalDelete() {
            this.$closed()
            let cardModalDelete = this.$refs.cardModal
            if (cardModalDelete.classList.contains('show')) {
                cardModalDelete.classList.remove('show')
            } else {
                this.$closed()
                cardModalDelete.classList.add('show')
            }
        },
    },
    watch: {
        show() {
            this.showModalDelete()
        }
    }
}
</script>
