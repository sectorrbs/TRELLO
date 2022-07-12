<template>
    <div class="settings__item" @click.prevent="this.$emit('open', $event)">
        <div class="settings__item-btn" :class="{show: !showDelete}">
            Удалить доску
        </div>
        <Alert class="desks__item-alert" :class="{show: showDelete}">
            <template v-slot:alert_title>
                Вы точно хотите удалить доску?
            </template>
            <template v-slot:alert_confirm>
                <Fa :type="'r'"
                    @click.prevent="this.$store.dispatch('deleteDesk', desk)"
                    :name="'check desks__item-confirm'"/>
            </template>
            <template v-slot:alert_cancel>
                <Fa :type="'l'"
                    @click.prevent.stop="this.$emit('closed')"
                    :name="'times settings__cancel desks__item-cancel'"/>
            </template>
        </Alert>
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
