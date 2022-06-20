<template>
    <router-link draggable="false"
                 :to="{name: 'lists', params: { id: desk.id }}"
                 class="desks__item"
                 :class="{default: desk.id_backgrounds_desks === 1}"
                 :style="{background: deskBackground}"
                 :id="desk.id">
        <div class="desks__item-title">
            {{ desk.name }}
        </div>
        <form ref="renameDesk">
            <DeskRenameInput
                ref="input"
                @editShow="show = false"
                :desk="desk"
                :show="show"
                :old_name="name"
                v-model="desk.name"/>
            <Fa :type="'r'"
                @click.prevent.stop="renameDesk"
                :name="'pen desks__edit'"/>
            <Fa :type="'s'"
                @click.prevent.stop="showSettingsList"
                :name="'ellipsis-h desks__settings desks__item-settings'"/>

            <div class="desks__list-settings">
                <DeskSettings :desk="desk"/>
            </div>

        </form>

    </router-link>
</template>

<script>

import DeskSettings from './DeskSettings'
import DeskRenameInput from './DeskRenameInput'

export default {
    name: "DeskItem",
    data: () => ({
        show: false,
        name: null
    }),
    components: {DeskRenameInput, DeskSettings},
    props: ['desk'],
    mounted() {

    },
    methods: {
        renameDesk() {
            this.$closed('renameDesk')
            this.show = !this.show
            setTimeout(() => {
                this.$refs.renameDesk.querySelector('.desks__item-input').focus()
            }, 1)
            this.name = this.$refs.input.modelValue
        },
        showSettingsList() {

            let btn = this.$refs.renameDesk.querySelector('.desks__settings')
            let list = this.$refs.renameDesk.querySelector('.desks__list-settings')

            if (btn.classList.contains('open')) {
                this.$refs.renameDesk.classList.remove('show')
                btn.classList.remove('open')
                list.classList.remove('open')
            } else {
                this.$closed('settings')
                btn.classList.add('open')
                list.classList.add('open')
                this.$refs.renameDesk.classList.add('show')
            }
        }
    },
    computed: {
        deskBackground() {
            if(this.desk){
                let color = this.desk.background.color,
                    image = this.desk.background.image
                if (color) {
                    return color
                } else {
                    return `url("/storage/backgrounds/thumb_305_75/${image}")`
                }
            }
        },
    }
}
</script>
