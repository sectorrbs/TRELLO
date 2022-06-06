<template>
    <form class="details__window-checklist-form" ref="checklistForm">
        <input type="text"
               class="details__window-checklist-rename"
               :value="checkList.name"
               placeholder="Введите название чек-листа">
        <div class="details__window-checklist-renamebtns">
            <div class="details__window-checklist-btn red">
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
    props: ['checkList'],
    methods: {
        renameCheckList(){
            this.$refs.checklistForm.classList.remove('show')
            this.$store.dispatch('updateCheckList', this.checkList)
        },
    },
}
</script>
