<template>
    <Loader v-if="loader"/>
    <div v-else>
        <div class="room" v-if="roomParty.length">
            <div class="room__content">
                <div class="room__title">
                    Ваши рабочие пространства
                </div>
                <div class="room__items">
                    <RoomItem v-for="party in roomParty"
                              :key="party.id"
                              :party="party"/>
                </div>
            </div>
        </div>
        <button class="room__empty" v-else @click="this.$store.dispatch('openModalCreateRoom')">
            <Fa :type="'l'"
                :name="'plus room__empty-icon'"/>
            Добавить рабочее пространство
        </button>
    </div>
</template>

<script>

import RoomItem from "./Components/RoomItem";

export default {
    name: "Index",
    props: ['roomParty'],
    components: {RoomItem},
    computed: {
        loader() {
            return this.$store.getters.loader
        },
    }
}
</script>

