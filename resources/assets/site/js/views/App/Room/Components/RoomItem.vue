<template>
    <div class="room__item">
        <RoomActions :room="party.room"/>
        <Loader v-if="loader"/>
        <div v-else class="desks">
            <div class="desks__inner"
                 :class="{guest: isGuest}"
                 v-if="party.room.desks">
                <DeskItem :party="party"
                          :class="{disabled: isGuest}"
                          v-for="desk in party.room.desks"
                          :desk="desk"
                          :key="desk.id"/>
                <RoomDeskAdd :class="{disabled: isGuest}" :roomId="party.room.id"/>
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
import {deskMixin} from "../../../../mixins/deskMixin";

export default {
    name: "RoomItem",
    props: ['party'],
    components: {ModalLoad, RoomActions, DeskItem, RoomDeskAdd},
    computed: {
        ...mapGetters(['loader']),
    },
    mixins: [deskMixin]
}
</script>
