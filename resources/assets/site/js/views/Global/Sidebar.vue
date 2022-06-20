<template>
    <div class="sidebar">
        <div class="sidebar__links">
            <router-link :to="{name: 'home'}" class="sidebar__link">
                <Fa :type="'r'"
                    :name="'home sidebar__link-icon'"/>
                Главная
            </router-link>
            <router-link :to="{name: 'desks_index'}" class="sidebar__link">
                <Fa :type="'r'"
                    :name="'border-all sidebar__link-icon'"/>
                Доски
            </router-link>
            <button class="sidebar__link sidebar__add-room"
                    @click="this.$store.dispatch('openModalCreateRoom')">
                <Fa :type="'l'"
                    :name="'plus sidebar__link-icon'"/>
                Добавить пространство
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Sidebar"
}
</script>
