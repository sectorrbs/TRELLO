<template>
    <router-link draggable="false" :to="{name: 'lists', params: { id: desk.id }}" class="desks__item" :id="desk.id">
        <div class="desks__item-title">
            {{ desk.name }}
        </div>
        <form ref="renameDesk" @submit.prevent="renameDesk">
            <DeskRenameInput
                ref="input"
                @editShow="show = false"
                :desk="desk"
                :show="show"
                :old_name="name"
                v-model="desk.name"/>
            <Fa :type="'r'"
                @click.prevent="renameDesk"
                :name="'pen desks__edit'"/>
            <Fa :type="'l'"
                @click.prevent="this.$store.dispatch('deleteDesk',desk)"
                :name="'times desks__delete'"/>
        </form>

    </router-link>
</template>

<script>

import DeskRenameInput from './DeskRenameInput'

export default {
    name: "DeskItem",
    data: () => ({
        show: false,
        name: null
    }),
    components: {DeskRenameInput},
    props: ['desk'],
    methods: {
        renameDesk() {
            this.$closed('renameDesk')
            this.show = !this.show
            setTimeout(() => {
               this.$refs.renameDesk.querySelector('.desks__item-input').focus()
            }, 1)
            this.name = this.$refs.input.modelValue
        },
    },
}
</script>
