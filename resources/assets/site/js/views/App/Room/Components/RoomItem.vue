<template>
    <div class="room__item">
        <RoomActions/>
        <PageLoad v-if="pageLoad" />
        <div v-else class="desks">
            <div class="desks__inner" v-if="desks">
                <DeskItem v-for="desk in desks" :desk="desk" :key="desk.id"/>
                <RoomDeskAdd/>
            </div>
            <PageLoad v-else/>
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
    props: ['desks'],
    components: {ModalLoad, RoomActions, DeskItem, RoomDeskAdd},
    computed: {
        ...mapGetters(['pageLoad'])
    }
}
</script>
