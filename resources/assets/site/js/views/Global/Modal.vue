<template>

    <div class="modal" :class="{show: this.$store.getters.modal}">
        <div v-if="cardInfo" class="modal__window">
            <Fa :type="'l'"
                @click.prevent="closeModal"
                :name="'times modal__close'"/>
            <ModalLoad v-if="modalLoad"/>
            <div v-else class="modal__inner">
                <div class="modal__window-content">
                    {{ cardInfo.name }}
                </div>
            </div>
        </div>

    </div>

</template>

<script>

import {mapActions, mapGetters} from 'vuex'

export default {
    name: "Modal",
    data() {
        return {
            id: null,
            action: null,
            text: null,
        }
    },
    mounted() {
        window.addEventListener('click', e =>{
            if (e.target.classList.contains('modal')) {
                this.$store.dispatch('closeModal')
            }
        })
    },
    props: ['class'],
    methods: {
        ...mapActions(['closeModal']),
        openModal(data) {
            this.id = data.id
            this.text = data.text
            this.action = data.action
        },
        startAction() {
            this.action()
            this.closeModal()
        }
    },
    computed: {
        ...mapGetters(['cardInfo', 'modalLoad'])
    },
}
</script>

