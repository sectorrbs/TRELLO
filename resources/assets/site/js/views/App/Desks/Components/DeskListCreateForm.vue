<template>
    <form class="desks__form" ref="deskListForm" v-show="show" @submit.prevent="create">
        <div class="desks__form-content">
            <input
                v-model="name"
                @input="this.$store.commit('setErrorMessage', null)"
                placeholder="Введите название колонки"
                type="text"
                class="form-input desks__form-input">
            <div class="desks__form-bottom">
                <button
                    :class="{disabled: !name}"
                    class="btn">
                    Добавить колонку
                </button>
                <Fa :type="'l'"
                    :name="'times desks__form-close'"
                    @click="$emit('showClose')"/>
            </div>
        </div>
        <div class="desks__form-load">
            <Fa :type="'r'"
                :name="'spinner-third desks__form-load-icon'"/>
        </div>
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
    emits: ['showClose'],
    props: ['desk_id', 'show'],
    methods: {
        create() {
            this.$store.dispatch('createList', {name: this.name, desk_id: this.desk_id})

            this.$refs.deskListForm.classList.add('load')

            setTimeout(() => {
                if (!this.errorMessage) {
                    this.$emit('showClose')
                    this.$refs.deskListForm.classList.remove('load')
                } else {
                    this.$refs.deskListForm.classList.remove('load')
                }
            }, 300)

        }
    },
    computed: {
        ...mapGetters(['errorMessage'])
    }
}
</script>
