<template>
    <router-link :to="{name: 'show', params: { id: desk.id }}" class="desks__item" :id="desk.id">
        <div class="desks__item-title">
            {{ desk.name }}
        </div>
        <Fa :type="'l'"
            @click.prevent="this.$store.dispatch('deleteDesk',desk)"
            :name="'times desks__delete'"/>
    </router-link>
</template>

<script>
export default {
    name: "DeskItem",
    props: {
        desk: {
            type: Object,
        }
    },
}
</script>
