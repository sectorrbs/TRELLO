<template>
    <div class="settings__item-alert">
        <slot name="alert_title"></slot>
        <div class="settings__item-btns">
            <slot name="alert_confirm"></slot>
            <slot name="alert_cancel"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Alert"
}
</script>
