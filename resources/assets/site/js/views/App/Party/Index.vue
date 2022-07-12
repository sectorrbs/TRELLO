<template>
    <div class="content">
        <div class="container page__content">
            <div class="page__content-left">
                <Sidebar/>
            </div>
            <Loader v-if="loader"/>
            <div v-else class="page__content-right party">
                <div class="room__title">
                    Участники рабосего пространства
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Index",
    computed: {
        loader() {
            return this.$store.getters.loader
        }
    },
    mounted() {
        this.$store.dispatch('getRoom', this.$route.params.id)
    },
}
</script>
