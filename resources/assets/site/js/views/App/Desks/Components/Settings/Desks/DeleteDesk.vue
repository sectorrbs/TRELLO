<template>
    <div class="settings__item" @click.prevent="showDeleteWindow">
        <div class="settings__item-btn" v-show="!showDelete">
            Удалить доску
        </div>
        <div class="settings__item-alert desks__item-alert" v-show="showDelete">
            Вы точно хотите удалить доску?
            <div class="settings__item-btns">
                <Fa :type="'r'"
                    @click.prevent="this.$store.dispatch('deleteDesk', desk)"
                    :name="'check desks__item-confirm'"/>
                <Fa :type="'l'"
                    @click.prevent.stop="hiddenDeleteWindow"
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
    props: ['desk'],
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
