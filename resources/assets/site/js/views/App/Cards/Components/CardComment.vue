<template>
    <div class="details__window-action">
        <div class="details__window-action-title">
            <Fa :type="'d'"
                :name="'list-ul details__window-icon'"/>
            Действия
        </div>
        <div class="details__window-action-comment">
            <div class="details__window-action-logo">

            </div>
            <div class="details__window-action-btn">
                Напишите комментарий...
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Comment"
}
</script>

<style scoped>

</style>
