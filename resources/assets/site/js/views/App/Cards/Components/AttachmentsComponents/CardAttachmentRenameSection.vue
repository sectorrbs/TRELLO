<template>
    <div class="attachment__section-rename hidden">
        <input type="text"
               class="attachment__section-input"
               @input="renameAttachment"
               v-model="title"
               placeholder="название вложения">
        <div class="attachment__section-btns">
            <Fa :type="'r'"
                @click="cancelRenameAttachment"
                :name="'times attachment__section-btn red details__window-icon'"/>
            <Fa :type="'r'"
                @click="updateNameAttachment"
                :name="'check attachment__section-btn disabled green details__window-icon'"/>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardAttachmentRenameSection",
    data: () => ({
        newName: null,
    }),
    props: ['title'],
    methods: {
        renameAttachment(e) {
            this.newName = e.target.value
        },
        updateNameAttachment() {

        },
        cancelRenameAttachment() {

        }
    },
}
</script>
