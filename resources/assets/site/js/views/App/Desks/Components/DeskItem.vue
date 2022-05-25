<template>
    <div class="desks__item" :id="desk.id">
        <div class="desks__title">
            {{ desk.name }}
        </div>
    </div>
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
