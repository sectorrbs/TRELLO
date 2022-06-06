<template>

    <div class="content">
        <div class="container page__content">
            <div class="page__content-left">
                <Sidebar/>
            </div>
            <div class="page__content-right">
                <Room :desks="desks"/>
            </div>
        </div>
    </div>

</template>

<script>

import Room from "../Room/Index";
import {mapActions, mapGetters} from 'vuex'

export default {
    name: "Desks",
    components: {Room},
    mounted() {
        this.getDesksNotLoader();
    },
    methods: {
        ...mapActions(['getDesksNotLoader'])
    },
    computed: {
        ...mapGetters(['desks', 'errorMessage', 'loader'])
    },
}
</script>
