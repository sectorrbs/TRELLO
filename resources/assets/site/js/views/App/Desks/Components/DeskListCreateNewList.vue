<template>
    <div class="desks__lists-add">
        <div class="desks__create-list">
            <DeskListCreateForm :show="show" @showClose="showForm" :desk_id="desk_id"/>
        </div>
        <div class="desks__lists-add-btn" @click="showForm">
            <Fa :type="'r'"
                :name="'plus desks__add-icon'"/>
            Добавить первую колонку
        </div>
    </div>
</template>

<script>

import DeskListCreateForm from "./DeskListCreateForm";

export default {
    name: "DeskListCreateNewList",
    data: () => ({
        show: false
    }),
    mounted() {
        window.addEventListener('click', e => {
            if (!e.target.classList.contains('desks__form-input') &&
                !e.target.classList.contains('desks__lists-add-btn') &&
                !e.target.classList.contains('desks__form-bottom')) {
                this.show = false
            }
        })
    },
    props: ['desk_id'],
    components: {DeskListCreateForm},
    methods: {
        showForm() {
            this.show = true
            this.$store.commit('setErrorMessage', null)
        }
    }
}
</script>
