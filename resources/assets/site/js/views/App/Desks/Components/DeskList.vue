<template>
    <div draggable="false" class="desks__list">
        <div class="desks__list-inner">
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
        </div>

        <Cards :cards="list.cards"/>

        <div class="desks__list-btns">
            <div class="desks__list-btn">Добавить карточку</div>
        </div>

    </div>
</template>

<script>

import DeskListRenameInput from './DeskListRenameInput'
import Cards from '../../Cards/Cards'

export default {
    name: "DeskList",
    data: () => ({
        show: false,
        name: null
    }),
    props: ['list'],
    components: {DeskListRenameInput, Cards},
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
