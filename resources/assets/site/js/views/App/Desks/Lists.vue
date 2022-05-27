<template>

    <Loader v-if="loader"/>

    <div class="content" v-else>
        <div v-if="desk" class="container">
            <div class="content__title">Списки доски "{{desk.name}}"</div>
            <div class="desks">
                <DeskUpdateInput v-model="desk.name" @update="updateDeskName" @rename="renameDesk"/>
            </div>
            <Error v-if="errorMessage" class="desks__form-error" :error="errorMessage"/>
            <Error v-if="v$.name.$error" class="desks__form-error" :error="'Название не указано'"/>
            <div class="desks__create-list">
                <DeskListCreateForm :desk_id="desk.id"/>
            </div>
            <div v-if="desk.lists.length" class="desks__lists">
                <DeskList v-for="list in desk.lists" :list="list" :key="list.id"/>
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
import DeskUpdateInput from "./Components/DeskUpdateInput";

export default {
    name: "Lists",
    data: () => ({
        v$: useVuelidate(),
        name: null
    }),
    components: {DeskList, DeskUpdateInput, DeskListCreateForm},
    mounted() {
        this.getDesk(this.$route.params.id)
    },
    methods: {
        ...mapActions(['getDesk', 'updateDesk']),
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
