<template>
    <div class="attachment__section-left">
        <div class="attachment__section-img attachment__section-bg">
            LINK
        </div>
    </div>
    <div class="attachment__section-right">
        <div class="attachment__section-title">
            <a :href="'https://' + attachment.link"
               target="_blank"
               class="link">
                {{ attachment.link }}
                <Fa :type="'s'"
                    :name="'external-link-alt details__window-icon'"/>
            </a>
        </div>
        <CardAttachmentRenameSection :title="attachment.link"/>
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
