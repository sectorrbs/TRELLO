<template>
    <div class="content">
        <div class="container page__content">
            <div class="page__content-left">
                <Sidebar/>
            </div>
            <div class="page__content-right">
                <Loader v-if="loader"/>
                <div v-else class="party">
                    <div v-if="room" class="party__wrapper">
                        <div class="party__top">
                            <div class="room__title">
                                Участники рабочего пространства "{{ room.name }}"
                            </div>
                            <div class="party__subtitle">
                                Участники рабочего пространства могут просматривать доски для рабочего пространства и
                                присоединяться к ним, а также создавать новые доски в этом пространстве.
                            </div>
                            <div class="party__info">
                                <div class="party__info-count">
                                    <Fa :type="'s'"
                                        :name="'user-alt party__info-icon'"/>
                                    <span>
                                        {{ room.participants.length }}
                                    </span>
                                </div>
                                <div class="party__logo room__item-logo">
                                    <span>
                                    {{ room.name[0] }}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="party__items">
                            <ParticipantsHome v-for="participant in participants"
                                              :key="participant.id"
                                              :participant="participant"/>
                        </div>
                        <div class="party__btns">
                            <router-link :to="{name: 'desks_index'}">
                                <Fa :type="'s'"
                                    :name="'chevron-left party__btns-back'"/>
                            </router-link>
                            <div class="btn party__btns-add sidebar__link sidebar__add-room"
                                 :class="{disabled: !userRoleAdmin}"
                                 @click="this.$store.dispatch('openModalCreateParty')">
                                <Fa :type="'s'"
                                    :name="'user-plus party__btns-icon'"/>
                                Пригласить в рабочее пространство
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import ParticipantsHome from './Components/ParticipantsHome'
import {settingsRoomPartyMixin} from "../../../mixins/settingsRoomPartyMixin";

export default {
    name: "Index",
    components: {ParticipantsHome},
    computed: {
        loader() {
            return this.$store.getters.loader
        },
        room() {
            return this.$store.getters.room
        },
        participants() {
            return this.$store.getters.room.participants.sort((a, b) => {
                return a.role.id - b.role.id
            })
        },
    },
    mounted() {
        this.$store.dispatch('getRoom', this.$route.params.id)
    },
    mixins: [settingsRoomPartyMixin],
}
</script>
