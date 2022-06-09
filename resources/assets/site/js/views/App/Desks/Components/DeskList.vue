<template>
    <div draggable="false" ref="desk_list" class="desks__list">
        <div @drop="onDrop($event, list.id)"
             class="desks__list-wrapper droppable"
             @dragover.prevent
             @dragenter.prevent
             :id=list.id>
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

                <div class="desks__list-settings">
                    <DeskListSettings :list="list"/>
                </div>
            </div>

            <Cards :cards="cards"/>

            <DeskListNewCard @addNewCard="reloadCards" :list="list"/>

        </div>
    </div>
</template>

<script>

import DeskListRenameInput from './DeskListRenameInput'
import DeskListNewCard from './DeskListNewCard'
import DeskListSettings from './DeskListSettings'
import Cards from '../../Cards/Cards'


export default {
    name: "DeskList",
    data: () => ({
        show: false,
        name: null,
        items: [],
    }),
    props: ['list'],
    components: {DeskListRenameInput, DeskListNewCard, Cards, DeskListSettings},
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
            this.$store.dispatch('getDeskNotLoader', data.desk_id)
            this.items.push(data)
            setTimeout(() => {
                this.items.pop()
                this.items.push(this.$store.getters.cardInfo)
            }, 500)
        },

        showSettingsList() {

            let btn = this.$refs.desk_list.querySelector('.desks__settings')
            let list = this.$refs.desk_list.querySelector('.desks__list-settings')

            if (btn.classList.contains('open')) {
                this.$refs.desk_list.classList.remove('show')
                btn.classList.remove('open')
                list.classList.remove('open')
            } else {
                this.$closed('settings')
                btn.classList.add('open')
                list.classList.add('open')
                this.$refs.desk_list.classList.add('show')
            }
        },
        onDrop(e, listId) {

            const id = e.dataTransfer.getData('id')
            const desk_lists_id = e.dataTransfer.getData('desk_lists_id')
            const name = e.dataTransfer.getData('cardName')
            const deskList = e.dataTransfer.getData('deskList')
            const checkLists = e.dataTransfer.getData('checkLists')

            let listItem = document.getElementById(desk_lists_id)

            const newCard = {
                id,
                desk_lists_id: listId,
                name,
                deskList: JSON.parse(deskList),
                checkLists: JSON.parse(checkLists)
            }

            this.$store.dispatch('updateCard', newCard)
            this.$store.dispatch('getDeskNotLoader', this.list.desk_id)
        }
    },
    mounted() {
        this.items = this.list.cards
    },
    computed: {
        cards: {
            get() {
                return this.items
            },
            set(val) {
                return this.items
            }
        }
    }
}
</script>
