<template>
    <div class="details__window-attachment">
        <div class="attachment__sections">
            <Error v-if="errorCardMessage" :class="{show: errorCardMessage}" class="" :error="errorCardMessage"/>
            <div v-else class="attachment__section-loading">
                Обработка вложения
                <Fa :type="'s'"
                    :name="'download attachment__section-loading-icon'"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardAttachmentsLoading",
    data: () => ({
        show: false,
    }),
    computed: {
        errorCardMessage() {
            return this.$store.getters.errorCardMessage
        }
    }
}
</script>
