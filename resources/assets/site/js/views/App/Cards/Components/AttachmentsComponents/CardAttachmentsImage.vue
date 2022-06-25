<template>
    <div class="attachment__section-left">
        <img v-if="attachment.image"
             class="attachment__section-img"
             :src="'/storage/cards_images/thumb_115_80/'+ attachment.image"
             :alt="attachment.image_name">
    </div>
    <div class="attachment__section-right">
        <div class="attachment__section-title">
            {{ attachment.image_name }}
        </div>
        <CardAttachmentRenameSection :title="attachment.image_name" />
        <div class="attachment__section-date">
            Добавлено {{ attachment.date }}
        </div>
        <div class="attachment__section-cover">
            <div :class="[attachment.cover ? 'hidden' : '' ]" class="cover-add"
                 @click="addCardCover">
                <Fa :type="'r'"
                    :name="'blanket details__window-icon'"/>
                Сделать обложкой
            </div>
            <div :class="[attachment.cover ? 'active' : '' ]" class="cover-delete"
                 @click="deleteCardCover">
                <Fa :type="'r'"
                    :name="'blanket details__window-icon'"/>
                Удалить обложку
            </div>
        </div>
        <CardAttachmentsActions :attachment="attachment"/>
    </div>
</template>

<script>

import CardAttachmentsActions from './CardAttachmentsActions'
import CardAttachmentRenameSection from './CardAttachmentRenameSection'

export default {
    name: "CardAttachmentsImage",
    props: ['attachment'],
    components: {CardAttachmentsActions, CardAttachmentRenameSection},
    methods: {
        addCardCover(e) {
            let attachmentsParent = document.querySelector('.attachment__sections'),
                deleteCoverBtns = attachmentsParent.querySelectorAll('.cover-delete'),
                addCoverBtns = attachmentsParent.querySelectorAll('.cover-add'),
                currentImageParent = e.target.closest('.attachment__section')

            deleteCoverBtns.forEach(btn => btn.classList.remove('active'))
            addCoverBtns.forEach(btn => btn.classList.remove('hidden'))
            currentImageParent.classList.add('show')

            this.attachment.desk_id = this.$store.getters.desk.id
            this.$store.dispatch('addCardAttachmentsCover', this.attachment)
        },
        deleteCardCover(e) {
            let currentImageParent = e.target.closest('.attachment__section')
            currentImageParent.classList.add('show')
            this.attachment.desk_id = this.$store.getters.desk.id
            this.$store.dispatch('deleteCardAttachmentsCover', this.attachment)
        },

    }
}
</script>

