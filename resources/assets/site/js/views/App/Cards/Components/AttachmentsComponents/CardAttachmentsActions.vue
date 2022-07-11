<template>
    <div class="attachment__section-actions">
        <div class="attachment__section-link">
            <Fa :type="'r'"
                :name="'comment-alt details__window-icon'"/>
        </div>
        <div class="attachment__section-link" @click="renameAttachmentTitle">
            <Fa :type="'r'"
                :name="'highlighter details__window-icon'"/>
        </div>
        <div class="attachment__section-link delete" @click.stop="openDeleteModal">
            <Fa :type="'r'"
                :name="'trash-alt details__window-icon'"/>
            <ActionModal :show="openModalDelete">
                <template v-slot:modal_title>
                    Удаление вложения
                </template>
                <template v-slot:modal_content>
                    <div class="details__actions-modal-text">
                        Удаление вложения необратимо. Отмена невозможна.
                    </div>
                    <div class="details__actions-modal-btn delete"
                         @click="deleteAttachment(attachment)">
                        Удалить
                    </div>
                </template>
            </ActionModal>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardAttachmentsActions",
    data: () => ({
        openModalDelete: false,
    }),
    props: ['attachment'],
    methods: {
        openDeleteModal(e) {
            document.querySelectorAll('.details__actions-modal')
                .forEach(el => el.classList.remove('show'))
            let parentLink = e.target.closest('.attachment__section-link')
            parentLink.querySelector('.details__actions-modal').classList.add('show')
        },
        deleteAttachment(attachment) {
            attachment.desk_id = this.$store.getters.desk.id
            this.$store.dispatch('deleteCardAttachment', attachment)
        },
        renameAttachmentTitle(e) {
            let attachment = e.target.closest('.attachment__section'),
                title = attachment.querySelector('.section-title').innerText,
                input = attachment.querySelector('.attachment__section-input'),
                newTitle = title.replace(/https:\/\//gi, '');

            document.querySelectorAll('.attachment__section-right')
                .forEach(el => el.classList.remove('rename'))
            attachment.querySelector('.attachment__section-right').classList.add('rename')

            input.value = newTitle
            input.focus()
        }
    }
}
</script>
