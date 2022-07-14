<template>
    <div class="room__item">
        <RoomActions :room="party.room"/>
        <Loader v-if="loader"/>
        <div v-else class="desks">
            <div class="desks__inner" v-if="party.room.desks">
                <DeskItem v-for="desk in party.room.desks" :desk="desk" :key="desk.id"/>
                <RoomDeskAdd :roomId="party.room.id"/>
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
    props: ['party'],
    components: {ModalLoad, RoomActions, DeskItem, RoomDeskAdd},
    computed: {
        ...mapGetters(['loader'])
    }
}
</script>
