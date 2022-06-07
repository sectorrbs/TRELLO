<template>

    <Loader v-if="loader"/>

    <div class="content" v-else>
        <div v-if="desk" class="desks__lists">
            <div v-if="desk.lists?.length" class="desks__lists-inner">
                <DeskList v-for="list in desk.lists" :list="list" :key="list.id"/>
                <div class="desks__lists-add">
                    <div class="desks__create-list">
                        <DeskListCreateForm :show="show" @showClose="showForm" :desk_id="desk.id"/>
                    </div>
                    <div class="desks__lists-add-btn" @click="showForm">
                        <Fa :type="'r'"
                            :name="'plus desks__add-icon'"/>
                        Добавить ещё одну колонку
                    </div>
                </div>
            </div>
            <div v-else class="desks__lists-empty">
                Списков у доски пока нет
            </div>
        </div>
    </div>

</template>

<script>

import {mapGetters, mapActions} from 'vuex'
import {required} from '@vuelidate/validators'
import {useVuelidate} from '@vuelidate/core'
import DeskList from "./Components/DeskList";
import DeskListCreateForm from "./Components/DeskListCreateForm";

export default {
    name: "Lists",
    data: () => ({
        v$: useVuelidate(),
        name: null,
        show: false
    }),
    components: {DeskList, DeskListCreateForm},
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
        ...mapGetters(['desk', 'loader', 'errorMessage'])
    },
    validations() {
        return {
            name: {required},
        }
    }
}
</script>
