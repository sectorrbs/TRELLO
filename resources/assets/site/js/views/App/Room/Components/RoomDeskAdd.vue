<template>
    <div class="room__desks-create">
        <div class="room__desks-add" @click="showDeskAddForm">
            <Fa :type="'r'"
                :name="'plus desks__add-icon'"/>
            Добавить доску
            <Error :class="{show: error}" class="room__desks-error" :error="errorMessage"/>
        </div>
        <div class="desks__create-list room__desks-form">
            <DeskCreateForm :roomId="roomId"
                            :show="show"
                            @showError="showError"
                            @showClose="hideDeskAddForm"/>
        </div>
    </div>
</template>

<script>

import DeskCreateForm from "../../Desks/Components/DeskCreateForm";

export default {
    name: "RoomDeskAdd",
    data: () => ({
        show: false,
        error: false,
        errorMessage: ''
    }),
    props: ['roomId'],
    mounted() {
        window.addEventListener('click', e => {
            if (!e.target.classList.contains('room__desks-add') &&
                !e.target.classList.contains('desks__form-input') &&
                !e.target.classList.contains('desks__form-content') &&
                !e.target.classList.contains('desks__form-bottom') &&
                !e.target.classList.contains('desks__form') &&
                !e.target.classList.contains('swiper-button-next') &&
                !e.target.classList.contains('swiper-button-prev') &&
                !e.target.classList.contains('swiper') &&
                !e.target.classList.contains('swiper-slide')) {
                this.show = false
            }
        })
    },
    components: {DeskCreateForm},
    methods: {
        showDeskAddForm() {
            this.show = true
            this.$store.commit('setErrorMessage', null)
            this.$store.dispatch('getBackgroundsDesks')
        },
        hideDeskAddForm() {
            this.show = false
        },
        showError(message) {
            this.errorMessage = message
            this.error = true
            setTimeout(() => {
                this.error = false
                this.$store.commit('setErrorMessage', null)
            }, 1500)
        }
    }
}
</script>
