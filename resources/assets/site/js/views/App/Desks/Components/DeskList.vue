<template>
    <div draggable="false" ref="desk_list" class="desks__list">
        <div class="desks__list-inner" ref="renameList">
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
                @click.prevent="renameList"
                :name="'pen desks__edit'"/>
            <Fa :type="'s'"
                @click.prevent="showSettingsList"
                :name="'ellipsis-h desks__settings'"/>

            <div ref="desk_list-settings" class="desks__list-settings">
                <Settings :list="list"/>
            </div>

        </div>

        <Cards :cards="cards"/>

        <DeskListNewCard @addNewCard="reloadCards" :list="list"/>

    </div>
</template>

<script>

import DeskListRenameInput from './DeskListRenameInput'
import DeskListNewCard from './DeskListNewCard'
import Cards from '../../Cards/Cards'

export default {
    name: "DeskList",
    data: () => ({
        show: false,
        name: null,
        items: []
    }),
    props: ['list'],
    components: {DeskListRenameInput, DeskListNewCard, Cards},
    methods: {
        renameList() {
            this.$closed('renameList')
            setTimeout(() => {
                this.$refs.renameList.querySelector('.desks__item-input').focus()
            }, 1)
            this.name = this.$refs.input.modelValue
            this.show = !this.show
        },

        reloadCards(data) {
            console.log(this.list.cards)
           this.items.push(data)
            this.$store.dispatch('getDeskNotLoader', data.desk_id)
            console.log(this.$store.getters.desk)
        },

        showSettingsList() {
            let btn = this.$refs.desk_list.querySelector('.desks__settings')
            let list = this.$refs.desk_list.querySelector('.desks__list-settings')

            if (btn.classList.contains('open')) {
                btn.classList.remove('open')
                list.classList.remove('open')
            } else {
                this.$closed('settings')
                btn.classList.add('open')
                list.classList.add('open')
            }
        }
    },
    mounted() {
        this.items = this.list.cards
    },
    computed: {
        cards() {
            return this.items
        }
    }
}
</script>
