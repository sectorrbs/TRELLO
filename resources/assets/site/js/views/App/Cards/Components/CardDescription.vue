<template>
    <div class="details__window-description">
        <div class="details__window-description-title">
            <Fa :type="'r'"
                :name="'stream details__window-icon'"/>
            Описание
        </div>
        <div class="details__window-description-more">
            <div class="details__window-description-btn">
                Добавить более подробное описание
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Description"
}
</script>

<style scoped>

</style>
