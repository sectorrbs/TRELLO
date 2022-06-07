<template>
    <div class="global-modal" ref="globalModal">
        <div class="global-modal-top">
            <div class="global-modal-title">
                <slot name="modal_title"></slot>
            </div>
            <div class="global-modal-close">
                <Fa :type="'l'"
                    :name="'times'" @click="this.$emit('hide')"/>
            </div>
        </div>
        <slot name="modal_content"></slot>
        <div class="global-modal-bottom">
            <slot name="modal_bottom"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "GlobalModal",
    props: ['show'],
    methods: {
        showModalDelete() {
            let cardModalDelete = this.$refs.globalModal
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

<style scoped>

</style>
