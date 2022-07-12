<template>
    <div class="settings__item" @click.prevent="showDeleteWindow">
        <div class="settings__item-btn" :class="{show: !showDelete}">
            Удалить список
        </div>
        <div class="settings__item-alert" :class="{show: showDelete}">
            Вы точно хотите удалить список?
            <div class="settings__item-btns">
                <Fa :type="'r'"
                    @click.prevent="this.$store.dispatch('deleteList', list)"
                    :name="'check desks__item-confirm'"/>
                <Fa :type="'l'"
                    @click.stop="hiddenDeleteWindow"
                    :name="'times settings__cancel desks__item-cancel'"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DeleteList",
    data: () => ({
        showDelete: false,
        show: false
    }),
    props: ['list'],
    methods: {
        showDeleteWindow() {
            this.showDelete = true;
            this.show = true;
        },
        hiddenDeleteWindow() {
            this.showDelete = false;
        }
    }
}
</script>
