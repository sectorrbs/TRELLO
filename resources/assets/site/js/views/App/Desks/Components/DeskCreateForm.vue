<template>
    <form class="desks__form" ref="deskForm" v-show="show" @submit.prevent="create">
        <div class="desks__form-content">
            <input
                v-model="name"
                @input="this.$store.commit('setErrorMessage', null)"
                placeholder="Введите название доски"
                type="text"
                class="form-input desks__form-input">
            <div class="desks__form-bottom">
                <button
                    :class="{disabled: !name}"
                    class="btn">
                    Добавить доску
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
</template>

<script>

import {mapGetters} from 'vuex'

export default {
    name: "DeskCreateForm",
    data: () => ({
        name: null,
        disabled: false
    }),
    props: ['show'],
    emits: ['showClose', 'showError'],
    methods: {
        create() {
            this.$store.dispatch('createDesk', this.name)
            this.$emit('showClose')

            setTimeout(() => {
                if (this.errorMessage) {
                    this.$emit('showError', this.errorMessage)
                }
            }, 300)

        }
    },
    computed: {
        ...mapGetters(['errorMessage'])
    }
}
</script>
