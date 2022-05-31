<template>

    <div class="modal" :class="{show: this.$store.getters.modal}">
        <div class="modal__wrapper">
            <ModalLoad v-if="modalLoad"/>
            <CardInfo v-else :cardInfo="cardInfo"/>
            <Fa :type="'l'"
                @click.prevent="closeModal"
                :name="'times modal__close'"/>
        </div>
    </div>

</template>

<script>

import {mapActions, mapGetters} from 'vuex'
import CardInfo from '../App/Cards/CardInfo'

export default {
    name: "Modal",
    data() {
        return {
            id: null,
            action: null,
            text: null,
        }
    },
    components: {CardInfo},
    mounted() {
        window.addEventListener('click', e => {
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

