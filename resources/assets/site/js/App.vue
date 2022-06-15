<template>

    <component :is="main">
        <Header :class="{transparent: headerClass}"/>
        <router-view></router-view>
        <Modal/>
    </component>
    <component :is="empty">
        <router-view></router-view>
    </component>

</template>

<script>

import Header from './views/Template/Header'
import {mapActions} from 'vuex'

export default {
    name: "App",
    components: {
        Header
    },
    data: () => ({
        transparent: false
    }),
    mounted() {
        this.$closed('app')
        this.getUser()
    },
    methods: {
        ...mapActions(['getUser'])
    },
    computed: {
        main() {
            if (this.$route.meta.layout === 'main') {
                return 'main'
            }
        },
        empty() {
            if (this.$route.meta.layout === 'empty') {
                return 'empty'
            }
        },
        headerClass() {
            if (this.$route.meta.header === 'transparent') {
                return this.transparent = true
            }
        }
    },
}
</script>

