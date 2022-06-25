<template>
    <div class="details__window-attachment">
        <div class="attachment__sections">
            <div class="attachment__section-loading">
                Обработка вложения
                <Fa :type="'s'"
                    :name="'download attachment__section-loading-icon'"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardAttachmentsLoading"
}
</script>
