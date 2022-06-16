<template>

    <div class="content">
        <div class="container page__content">
            <div class="page__content-left">
                <Sidebar/>
            </div>
            <div class="page__content-right">
                <Room :rooms="rooms"/>
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
        this.getRooms();
    },
    methods: {
        ...mapActions(['getDesksNotLoader', 'getRooms'])
    },
    computed: {
        ...mapGetters(['rooms'])
    },
}
</script>
