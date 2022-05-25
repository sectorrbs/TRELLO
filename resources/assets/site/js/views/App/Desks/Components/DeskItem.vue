<template>
    <router-link :to="{name: 'show', params: { id: desk.id }}" class="desks__item" :id="desk.id">
        <div class="desks__title">
            {{ desk.name }}
        </div>
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
