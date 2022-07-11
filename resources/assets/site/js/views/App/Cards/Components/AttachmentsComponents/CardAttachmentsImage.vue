<template>
    <div class="attachment__section-left">
        <photo-provider>
            <photo-consumer :intro="name" :key="src" :src="src">
                <img :src="thumbnail" class="view-box">
            </photo-consumer>
        </photo-provider>
        <div class="attachment__section-img-bg">
            <Fa :type="'r'"
                :name="'expand-alt attachment__section-icon'"/>
        </div>
    </div>
    <div class="attachment__section-right">
        <div class="attachment__section-title">
            <span class="section-title">
            {{ attachment.image_name }}
            </span>
        </div>
        <CardAttachmentRenameSection :attachment="attachment" :oldName="attachment.image_name"/>
        <div class="attachment__section-date">
            Добавлено {{ attachment.date }}
        </div>
        <div class="attachment__section-cover">
            <div :class="[attachment.cover ? 'hidden' : '' ]" class="cover-add"
                 @click="addCardCover">
                <Fa :type="'r'"
                    :name="'blanket details__window-icon'"/>
                Сделать основным изображением
            </div>
            <div :class="[attachment.cover ? 'active' : '' ]" class="cover-delete"
                 @click="deleteCardCover">
                <Fa :type="'r'"
                    :name="'blanket details__window-icon'"/>
                Убрать основное изображение
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
    data() {
        return {
            name: this.attachment.image_name,
            src: '/storage/cards_images/' + this.attachment.image,
            thumbnail: '/storage/cards_images/thumb_115_80/' + this.attachment.image,
        };
    },
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

