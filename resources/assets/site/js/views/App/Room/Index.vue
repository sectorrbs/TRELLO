<template>
    <div class="room">
        <button class="room__empty" v-if="rooms">
            <Fa :type="'l'"
                :name="'plus room__empty-icon'"/>
            Добавить рабочее пространство
        </button>
        <div class="room__content" v-else>
            <div class="room__title">
                Ваши рабочие пространства
            </div>
            <div class="room__items">
                <RoomItem v-for="room in rooms"
                          :key="room.id"
                          :desks="room.desks"/>
            </div>
        </div>
    </div>
</template>

<script>

import RoomItem from "./Components/RoomItem";

export default {
    name: "Index",
    props: ['rooms'],
    components: {RoomItem}
}
</script>

