<template>

    <Loader v-if="loader"/>

    <div class="content" v-else>
        <div class="container">
            <div class="content__title">{{ $route.meta.page_title }}</div>
            <DeskCreateForm/>
            <div class="desks">
                <div class="desks__inner" v-if="desks">
                    <DeskItem v-for="desk in desks" :desk="desk" :key="desk.id"/>
                </div>
                <Error v-else :error="errorMessage"/>
            </div>
        </div>
    </div>

</template>

<script>

import DeskItem from "./Components/DeskItem";
import DeskCreateForm from "./Components/DeskCreateForm";
import {mapActions, mapGetters} from 'vuex'

export default {
    name: "Desks",
    components: {DeskItem, DeskCreateForm},
    mounted() {
        this.getDesks();
    },
    methods: {
        ...mapActions(['getDesks'])
    },
    computed: {
        ...mapGetters(['desks', 'errorMessage', 'loader'])
    },
}
</script>
