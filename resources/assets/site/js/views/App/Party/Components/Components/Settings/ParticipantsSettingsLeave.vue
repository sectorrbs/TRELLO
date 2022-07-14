<template>
    <div class="settings__item" @click.prevent="this.$emit('open', $event)">
        <div class="settings__item-btn" :class="{show: !showDelete}">
            Покинуть пространство
        </div>
        <Alert class="desks__item-alert" :class="{show: showDelete}">
            <template v-slot:alert_title>
                Вы точно хотите покинуть пространство?
            </template>
            <template v-slot:alert_confirm>
                <Fa :type="'r'"
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
    name: "ParticipantsSettingsList",
    data: () => ({
        showDelete: false,
    }),
}
</script>
