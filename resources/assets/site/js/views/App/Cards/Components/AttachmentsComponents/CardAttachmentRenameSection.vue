<template>
    <div class="attachment__section-rename">
        <input type="text"
               class="attachment__section-input"
               @input="renameAttachment"
               placeholder="Название вложения">
        <div class="attachment__section-btns">
            <Fa :type="'r'"
                @click="cancelRenameAttachment"
                :name="'times attachment__section-btn red details__window-icon'"/>
            <Fa :type="'r'"
                @click="updateNameAttachment"
                :class="{disabled}"
                :name="'check attachment__section-btn green details__window-icon'"/>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardAttachmentRenameSection",
    data: () => ({
        disabled: true,
        newName: null,
    }),
    props: ['attachment', 'oldName'],
    methods: {
        renameAttachment(e) {
            this.newName = e.target.value;
            this.disabled = !e.target.value || e.target.value === this.oldName;
        },
        updateNameAttachment(e) {
            switch (this.attachment.type) {
                case 'link':
                    this.attachment.link = this.newName;
                    this.$store.dispatch('updateCardAttachmentLink', this.attachment)
                    break;
                case 'image':
                    this.attachment.image_name = this.newName;
                    this.$store.dispatch('updateCardAttachmentImage', this.attachment)
                    break;
            }
        },
        cancelRenameAttachment() {
            document.querySelectorAll('.attachment__section-right')
                .forEach(el => el.classList.remove('rename'))
        }
    },

}
</script>
