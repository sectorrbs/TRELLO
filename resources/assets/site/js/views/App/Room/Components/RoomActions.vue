<template>
    <div class="room__item-actions">
        <div class="room__item-name">
            <div class="room__item-logo"></div>
            Личная
        </div>
        <div class="room__item-btns">
            <div class="room__item-btn">
                <Fa :type="'r'"
                    :name="'border-all room__icon'"/>
                Доски
            </div>
            <div class="room__item-btn">
                <Fa :type="'r'"
                    :name="'window-frame room__icon'"/>
                Представления
            </div>
            <div class="room__item-btn">
                <Fa :type="'r'"
                    :name="'user-alt room__icon'"/>
                Участники (1)
            </div>
            <div class="room__item-btn">
                <Fa :type="'r'"
                    :name="'cog room__icon'"/>
                Настройки
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RoomActions"
}
</script>

<style scoped>

</style>
