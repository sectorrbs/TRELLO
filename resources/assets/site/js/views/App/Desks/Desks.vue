<template>

    <Loader v-if="loader"/>

    <div class="desks" v-else >
        <div class="container desks__inner">
            <DeskItem v-for="desk in desks" :desk="desk" :key="desk.id"/>
        </div>
    </div>

</template>

<script>

import DeskItem from "./Components/DeskItem";
import {mapActions, mapGetters} from 'vuex'

export default {
    name: "Desks",
    components: {DeskItem},
    mounted() {
        this.getDesks();
    },
    methods: {
        ...mapActions(['getDesks'])
    },
    computed: {
        ...mapGetters(['desks', 'errorMessage', 'loader'])
    }
}
</script>
