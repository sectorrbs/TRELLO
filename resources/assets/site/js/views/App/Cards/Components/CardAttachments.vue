<template>
    <div class="details__window-attachment">
        <div class="details__window-description-title">
            <Fa :type="'r'"
                :name="'paperclip details__window-icon'"/>
            Вложения
        </div>
        <div class="attachment__sections" ref="attachments">
            <div class="attachment__section" v-for="attachment in attachments" :key="attachment.id">
                <div class="attachment__section-cover-loading">
                    <Fa :type="'r'"
                        :name="'spinner attachment__section-cover-icon'"/>
                </div>
                <div class="attachment__section-left">
                    <img v-if="attachment.image"
                         class="attachment__section-img"
                         :src="'/storage/cards_images/thumb/'+ attachment.image"
                         :alt="attachment.image">
                </div>
                <div class="attachment__section-right">
                    <div class="attachment__section-title">
                        {{ attachment.image }}
                    </div>
                    <div class="attachment__section-date">
                        Добавлено {{ attachment.date }}
                    </div>
                    <div class="attachment__section-cover">
                        <div :class="[attachment.cover ? 'hidden' : '' ]" class="cover-add"
                             @click="addCardCover(attachment, $event)">
                            <Fa :type="'r'"
                                :name="'blanket details__window-icon'"/>
                            Сделать обложкой
                        </div>
                        <div :class="[attachment.cover ? 'active' : '' ]" class="cover-delete"
                             @click="deleteCardCover(attachment, $event)">
                            <Fa :type="'r'"
                                :name="'blanket details__window-icon'"/>
                            Удалить обложку
                        </div>
                    </div>
                    <div class="attachment__section-actions">
                        <a href="" class="attachment__section-link">
                            <Fa :type="'r'"
                                :name="'comment-alt details__window-icon'"/>
                        </a>
                        <a href="" class="attachment__section-link">
                            <Fa :type="'r'"
                                :name="'highlighter details__window-icon'"/>
                        </a>
                        <a href="" class="attachment__section-link delete">

                            <Fa :type="'r'"
                                :name="'trash-alt details__window-icon'"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardAttachments",
    props: ['attachments'],
    methods: {
        addCardCover(attachment, e) {
            let deleteCoverBtns = this.$refs.attachments.querySelectorAll('.cover-delete')
            let addCoverBtns = this.$refs.attachments.querySelectorAll('.cover-add')
            deleteCoverBtns.forEach(btn => btn.classList.remove('active'))
            addCoverBtns.forEach(btn => btn.classList.remove('hidden'))

            let currentImageParent = e.target.closest('.attachment__section')
            currentImageParent.classList.add('show')
            attachment.desk_id = this.$store.getters.desk.id
            this.$store.dispatch('addCardAttachmentsCover', attachment)
        },
        deleteCardCover(attachment, e) {
            let currentImageParent = e.target.closest('.attachment__section')
            currentImageParent.classList.add('show')
            attachment.desk_id = this.$store.getters.desk.id
            this.$store.dispatch('deleteCardAttachmentsCover', attachment)
        }
    },
}
</script>
