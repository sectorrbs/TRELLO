<template>
    <div class="desks__cards-term desks__cards-description">
        <Fa :type="'r'"
            :name="'line-columns icon'"/>
        <div class="desks__cards-description-text">
            {{ description }}
        </div>
    </div>
</template>

<script>
export default {
    name: "CardMiniDescription"
}
</script>

<style scoped>

</style>
