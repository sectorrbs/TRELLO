<template>
    <div class="settings">
        <div class="settings__items">
            <div class="settings__item" @click="deleteList">
                Удалить список
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Settings",
    props: ['list'],
    methods: {
        deleteList() {
            this.$store.dispatch('deleteList', this.list)
        },
    }
}
</script>

<style scoped>

</style>
