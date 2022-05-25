<template>
    <div class="container">
        <!--        <input type="text" v-model="desk.name">-->
    </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'

export default {
    name: "Show",
    data: () => ({
        desk: null
    }),
    mounted() {
        this.getDesk()
    },
    methods: {
        ...mapActions(['getDesk'])
    },
    computed: {
        ...mapGetters(['desk'])
    }
}
</script>
