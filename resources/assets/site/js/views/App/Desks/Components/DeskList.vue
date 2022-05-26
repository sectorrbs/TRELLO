<template>
    <router-link :to="{name: 'show', params: { id: 2}}" class="desks__list">
        <div class="desks__list-title">
            {{ list.name }}
        </div>
        <Fa :type="'l'"
            @click.prevent="this.$store.dispatch('deleteDesk',desk)"
            :name="'times desks__delete'"/>
    </router-link>
</template>

<script>
export default {
    name: "DeskList",
    props: ['list']
}
</script>
