<template>
    <router-link v-for="navigation in navigations"
                 :to="navigation.link">
        {{ navigation.title }}
    </router-link>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'

export default {
    name: "Navigation",
    data: () => ({
        navigations: [
            {
                title: 'Главная',
                link: '/',
                name: 'home'
            },
            {
                title: 'Доски',
                link: '/desks',
                name: 'desks'
            },
        ]
    }),
}
</script>

