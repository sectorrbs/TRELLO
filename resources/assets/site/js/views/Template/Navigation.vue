<template>
    <div class="navigations">
        <router-link v-for="navigation in navigations"
                     :to="navigation.link"
                     class="navigations__link">
            {{ navigation.title }}
        </router-link>
    </div>
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

