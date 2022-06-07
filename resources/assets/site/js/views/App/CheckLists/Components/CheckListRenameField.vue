<template>
    <form class="details__window-checklist-form" ref="checklistForm" @submit.prevent="renameCheckList">
        <input type="text"
               class="details__window-checklist-rename"
               :value="oldName"
               @input="changeChecklistName"
               placeholder="Введите название чек-листа">
        <div class="details__window-checklist-renamebtns">
            <div class="details__window-checklist-btn red" @click.prevent="this.$emit('hideField')">
                <Fa :type="'r'"
                    :name="'times details__window-icon'"/>
            </div>
            <div class="details__window-checklist-btn green" @click="renameCheckList">
                <Fa :type="'r'"
                    :name="'check details__window-icon'"/>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: "CheckListRenameField",
    data: () => ({
        newName: null
    }),
    props: ['checkList', 'oldName'],

    methods: {
        renameCheckList(e) {
            this.$refs.checklistForm.classList.remove('show')
            if (this.newName) {
                this.checkList.name = this.newName
                this.$store.dispatch('updateCheckList', this.checkList)
            }
        },
        changeChecklistName(e) {
            this.newName = e.target.value
        }
    },
}
</script>
