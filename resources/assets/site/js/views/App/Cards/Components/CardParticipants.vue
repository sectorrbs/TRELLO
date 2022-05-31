<template>
    <div class="details__window-participants">
        <div class="details__window-participants-subtitle">
            Участники
            <div class="details__window-participants-content">
                <div class="details__window-participants-items">
                    <div class="details__window-participants-item"></div>
                    <div class="details__window-participants-item"></div>
                </div>
                <div class="details__window-participants-btn">
                    <Fa :type="'l'"
                        :name="'plus'"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Participants"
}
</script>

<style scoped>

</style>
