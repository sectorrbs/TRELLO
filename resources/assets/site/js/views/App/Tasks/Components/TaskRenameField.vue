<template>
    <div class="tasks__item-rename">
                <textarea :value="modelValue" @keydown="enterSubmit" @input="editTaskName"
                          class="tasks__item-input">{{ task.name }}</textarea>
        <div class="tasks__item-btns">
            <div class="tasks__item-btn" :class="{disabled: !modelValue}" @click="renameTask">Сохранить</div>
            <Fa :type="'r'"
                :name="'times tasks__item-cancel'"/>
        </div>
    </div>
</template>

<script>
export default {
    name: "TaskRenameField",
    props: ['task', 'modelValue'],
    methods: {
        editTaskName(e) {
            this.$emit('update:modelValue', e.target.value)
        },
        enterSubmit(e) {
            if (e.keyCode === 13) this.renameTask()
        },
        renameTask(e) {
            if (this.modelValue) {
                this.task.name = this.modelValue
                this.$store.dispatch('updateTask', this.task)
            }
            this.$emit('closeField')
        },
    },
}
</script>

<style scoped>

</style>
