<template>
    <router-link draggable="false" :to="{name: 'lists', params: { id: desk.id }}" class="desks__item" :id="desk.id">
        <div class="desks__item-title">
            {{ desk.name }}
        </div>
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
            document.querySelectorAll('.desks__item-rename').forEach(el => {
                el.classList.remove('show')
            })
            this.show = true
            this.name = this.$refs.input.modelValue
        },
    },
}
</script>
