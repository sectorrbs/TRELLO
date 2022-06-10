<template>

    <Loader v-if="loader"/>

    <div class="content" v-else>
        <div v-if="desk" class="desks__lists">
            <div class="desks__lists-wrapper" v-if="desk.lists?.length">

                <draggable
                    item-key="id"
                    v-model="desk.lists"
                    class="desks__lists-inner">
                    <template #item="{element}">
                        <DeskList :list="element" :key="element.id"/>
                    </template>
                </draggable>

                <div>
                    <DeskListCreateNewList :desk_id="desk.id"/>
                </div>

            </div>
            <div v-else class="desks__lists-empty">
                Списков у доски пока нет
                <DeskListCreateNewList :desk_id="desk.id"/>
            </div>
        </div>
    </div>
</template>
<script>

import {mapGetters, mapActions} from 'vuex'
import {required} from '@vuelidate/validators'
import {useVuelidate} from '@vuelidate/core'
import DeskList from "./Components/DeskList";
import DeskListCreateNewList from "./Components/DeskListCreateNewList";
import draggable from 'vuedraggable'

export default {
    name: "Lists",
    data: () => ({
        v$: useVuelidate(),
        name: null,
        show: false
    }),
    components: {DeskList, DeskListCreateNewList, draggable},
    mounted() {
        this.getDesk(this.$route.params.id)
    },
    methods: {
        ...mapActions(['getDesks', 'getDesk', 'updateDesk']),
        updateDeskName() {
            this.name = this.desk.name
            this.v$.$touch()
            if (!this.v$.$error) {
                this.updateDesk(this.desk)
            }
        },
        renameDesk() {
            this.$store.commit('setErrorMessage', null)
            this.name = this.desk.name
            this.v$.$touch()
        },
        showForm() {
            this.show = !this.show
            this.$store.commit('setErrorMessage', null)
        }
    },
    computed: {
        ...mapGetters(['desk', 'loader', 'errorMessage']),
    },
    validations() {
        return {
            name: {required},
        }
    }
}
</script>
