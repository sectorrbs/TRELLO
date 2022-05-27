<template>
    <form class="desks__form" @submit.prevent="this.$store.dispatch('createList', {name,desk_id})">
        <input
            v-model="name"
            @input="this.$store.commit('setErrorMessage', null)"
            placeholder="Введите название списка"
            type="text"
            class="form-input">
        <button
            :class="{disabled: !name}"
            class="btn">
            Добавить список
        </button>
    </form>
    <Error v-if="errorMessage" class="desks__form-error" :error="errorMessage"/>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
    name: "DeskCreateForm",
    data: () => ({
        name: null,
        disabled: false
    }),
    props: ['desk_id'],
    methods: {},
    computed: {
        ...mapGetters(['errorMessage'])
    }
}
</script>

<style scoped>

</style>
