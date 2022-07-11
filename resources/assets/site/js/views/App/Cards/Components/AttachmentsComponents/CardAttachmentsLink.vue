<template>
    <div class="attachment__section-left">
        <div class="attachment__section-img attachment__section-bg">
            LINK
        </div>
    </div>
    <div class="attachment__section-right">
        <div class="attachment__section-title">
            <a :href="attachment.link"
               target="_blank"
               class="link section-title">
                {{ attachment.link }}
            </a>
            <Fa :type="'s'"
                :name="'external-link-alt details__window-icon'"/>
        </div>
        <CardAttachmentRenameSection :oldName="attachment.link" :attachment="attachment"/>
        <div class="attachment__section-date">
            Добавлено {{ attachment.date }}
        </div>
    </div>
    <CardAttachmentsActions :attachment="attachment"/>
</template>

<script>

import CardAttachmentsActions from './CardAttachmentsActions'
import CardAttachmentRenameSection from './CardAttachmentRenameSection'

export default {
    name: "CardAttachmentsLink",
    props: ['attachment'],
    components: {CardAttachmentsActions, CardAttachmentRenameSection},
}
</script>
