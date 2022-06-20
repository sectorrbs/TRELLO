<template>
    <div class="settings__item" @click.prevent="this.$emit('open', $event)">
        <div class="settings__item-btn" :class="{show: !showDelete}">
            Удалить доску
        </div>
        <div class="settings__item-alert desks__item-alert" :class="{show: showDelete}">
            Вы точно хотите удалить доску?
            <div class="settings__item-btns">
                <Fa :type="'r'"
                    @click.prevent="this.$store.dispatch('deleteDesk', desk)"
                    :name="'check desks__item-confirm'"/>
                <Fa :type="'l'"
                    @click.prevent.stop="this.$emit('closed')"
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
    }),
    props: ['desk'],
}
</script>
