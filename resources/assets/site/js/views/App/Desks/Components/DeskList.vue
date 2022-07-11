<template>
    <div draggable="false" ref="desk_list" :id=list.id class="desks__list">
        <div @drop="onDrop($event, list.id)"
             class="desks__list-wrapper droppable"
             @dragover.prevent
             @dragenter.prevent>
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

            <Cards :cards="list.cards"/>
            <!--            <Cards :cards="items"/>-->

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
            this.items.push(data)
            this.$store.dispatch('getDeskNotLoader', data.desk_id)
            setTimeout(() => {
                let list = this.$store.getters.desk.lists.find(el => el.id === data.desk_lists_id)
                this.items = list.cards
            }, 100)
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

            let desk_lists_id = e.dataTransfer.getData('desk_lists_id')
            let listItem = document.getElementById(desk_lists_id)

            if (listItem) {

                let id = e.dataTransfer.getData('id')
                let name = e.dataTransfer.getData('cardName')
                let deskList = e.dataTransfer.getData('deskList')
                let checkLists = e.dataTransfer.getData('checkLists')
                let num = e.dataTransfer.getData('num')
                let description = e.dataTransfer.getData('description')
                let term = e.dataTransfer.getData('term')
                let status = e.dataTransfer.getData('status')
                let id_backgrounds_cards = e.dataTransfer.getData('id_backgrounds_cards')

                const newPositionCard = {
                    id,
                    desk_lists_id: listId,
                    name,
                    num,
                    status,
                    description: JSON.parse(description),
                    id_backgrounds_cards: JSON.parse(id_backgrounds_cards),
                    term: JSON.parse(term),
                    deskList: JSON.parse(deskList),
                    checkLists: JSON.parse(checkLists)
                }
                setTimeout(() => {
                    this.$store.dispatch('updateCard', newPositionCard)
                    this.$store.dispatch('updateSuccessionCards', {
                        desk_id: this.$store.getters.desk.id,
                        succession: this.getSuccessionCards(listId)
                    })
                }, 50)
            } else {
                this.$store.dispatch('updateSuccessionLists', {
                    desk_id: this.$store.getters.desk.id,
                    succession: this.getSuccessionLists()
                })
            }
        },
        getSuccessionLists() {
            let succession = [],
                num = 1;

            document.querySelectorAll('.desks__list').forEach(el => {
                succession.push({
                    id: el.getAttribute('id'),
                    num: num++
                })
            })

            return succession;
        },
        getSuccessionCards(listId) {
            let list = document.getElementById(listId),
                succession = [],
                num = 1;

            list.querySelectorAll('.desks__cards-item').forEach(el => {
                succession.push({
                    id: el.getAttribute('data-card-item'),
                    num: num++
                })
            })
            return succession;
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
            set(cards) {
                return cards
            }
        }
    }
}
</script>
