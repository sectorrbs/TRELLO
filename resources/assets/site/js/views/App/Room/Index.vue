<template>
    <div class="room">
        <div class="room__title">
            Ваши рабочие пространства
        </div>
        <div class="room__items">
            <RoomItem :desks="desks"/>
        </div>
    </div>
</template>

<script>

import RoomItem from "./Components/RoomItem";

export default {
    name: "Index",
    props: ['desks'],
    components: {RoomItem}
}
</script>

