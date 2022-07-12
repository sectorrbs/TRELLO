<template>
    <div class="room__item">
        <RoomActions :room="room"/>
        <Loader v-if="loader"/>
        <div v-else class="desks">
            <div class="desks__inner" v-if="room.desks">
                <DeskItem v-for="desk in room.desks" :desk="desk" :key="desk.id"/>
                <RoomDeskAdd :roomId="room.id"/>
            </div>
            <Loader v-else/>
        </div>
    </div>
</template>

<script>

import RoomActions from './RoomActions'
import RoomDeskAdd from './RoomDeskAdd'
import DeskItem from "../../Desks/Components/DeskItem";
import {mapGetters} from 'vuex'
import ModalLoad from "../../../Global/ModalLoad";

export default {
    name: "RoomItem",
    props: ['room'],
    components: {ModalLoad, RoomActions, DeskItem, RoomDeskAdd},
    computed: {
        ...mapGetters(['loader'])
    }
}
</script>
