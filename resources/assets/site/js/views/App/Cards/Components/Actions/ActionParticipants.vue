<template>
    <div class="details__actions-btn participants" @click.stop="openModal">
        <Fa :type="'r'"
            :name="'user details__actions-icon'"/>
        Участники
        <ParticipantsModals :participants="participants"
                            :showModal="show"/>
    </div>
</template>

<script>

import {cardMixin} from "../../../../../mixins/cardMixin";
import ParticipantsModals from "./components/ParticipantsModals";

export default {
    name: "ActionParticipants",
    data: () => ({
        show: false,
    }),
    components: {ParticipantsModals},
    methods: {
        openModal(e) {
            this.actionModal(e)
        },
    },
    mixins: [cardMixin],
    computed: {
        participants() {
            return this.$store.getters.desk.participants
        }
    }
}
</script>

