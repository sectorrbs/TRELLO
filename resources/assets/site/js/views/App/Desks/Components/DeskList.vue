<template>
    <router-link draggable="false" :to="{name: 'lists', params: { id: 2}}" class="desks__list">
        <div class="desks__list-title">
            {{ list.name }}
        </div>
        <DeskListRenameInput
            ref="input"
            @editShow="show = false"
            :list="list"
            :show="show"
            :old_name="name"
            v-model="list.name"/>
        <Fa :type="'r'"
            @click.prevent="renameDesk"
            :name="'pen desks__edit'"/>
        <Fa :type="'l'"
            @click.prevent="this.$store.dispatch('deleteList',list)"
            :name="'times desks__delete'"/>
    </router-link>
</template>

<script>

import DeskListRenameInput from './DeskListRenameInput'

export default {
    name: "DeskList",
    data: () => ({
        show: false,
        name: null
    }),
    props: ['list'],
    components: {DeskListRenameInput},
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
