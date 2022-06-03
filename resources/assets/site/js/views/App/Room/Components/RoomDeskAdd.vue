<template>
    <div class="room__desks-create">
        <div class="room__desks-add" @click="showDeskAddForm">

            <Fa :type="'r'"
                :name="'plus desks__add-icon'"/>
            Добавить доску

            <Error :class="{show: error}" class="room__desks-error" :error="errorMessage"/>

        </div>
        <div class="desks__create-list room__desks-form">
            <DeskCreateForm :show="show" @showError="showError" @showClose="showDeskAddForm"/>
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
    components: {DeskCreateForm},
    methods: {
        showDeskAddForm() {
            this.show = !this.show
            this.$store.commit('setErrorMessage', null)
        },
        showError(message) {
            this.errorMessage = message
            this.error = true
            setTimeout(() => {
                this.error = false
                this.$store.commit('setErrorMessage', null)
            },1500)
        }
    }
}
</script>
