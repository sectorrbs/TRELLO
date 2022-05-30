<template>
    <Header/>
    <router-view></router-view>
    <Modal />
</template>

<script>

import Header from './views/Template/Header'

export default {
    name: "App",
    components: {
        Header
    },
    mounted() {
        this.$closed('app')
    }
}
</script>

