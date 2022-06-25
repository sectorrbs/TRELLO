<template>
    <div class="details__window-attachment">
        <div class="details__window-description-title">
            <Fa :type="'r'"
                :name="'paperclip details__window-icon'"/>
            Вложения
        </div>
        <div class="attachment__sections">
            <div class="attachment__section"
                 v-for="attachment in attachments"
                 :data-attachment="attachment.id"
                 :key="attachment.id">
                <div class="attachment__section-cover-loading">
                    <Fa :type="'r'"
                        :name="'spinner attachment__section-cover-icon'"/>
                </div>
                <CardAttachmentsImage v-if="attachment.image" :attachment="attachment"/>
                <CardAttachmentsLink v-else :attachment="attachment"/>
            </div>
        </div>
    </div>
</template>

<script>

import CardAttachmentsActions from './AttachmentsComponents/CardAttachmentsActions'
import CardAttachmentsImage from './AttachmentsComponents/CardAttachmentsImage'
import CardAttachmentsLink from './AttachmentsComponents/CardAttachmentsLink'

export default {
    name: "CardAttachments",
    props: ['attachments'],
    components: {CardAttachmentsActions, CardAttachmentsImage, CardAttachmentsLink},
}
</script>
