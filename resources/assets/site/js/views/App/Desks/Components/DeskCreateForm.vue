<template>
    <form class="desks__form" @submit.prevent="this.$store.dispatch('createDesk', name)">
        <input
            v-model="name"
            @input="this.$store.commit('setErrorMessage', null)"
            placeholder="Введите название доски"
            type="text"
            class="form-input">
        <button
            :class="{disabled: !name}"
            class="btn">
            Добавить доску
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
    methods: {},
    computed: {
        ...mapGetters(['errorMessage'])
    }
}
</script>
