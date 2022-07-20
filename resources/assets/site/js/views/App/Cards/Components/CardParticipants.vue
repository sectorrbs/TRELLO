<template>
    <div class="details__window-participants">
        <div class="details__window-participants-subtitle">
            Участники
            <div class="details__window-participants-content">
                <div class="details__window-participants-items">
                    <div class="details__window-participants-item"
                         v-for="party in parties"
                         :key="party.id">
                        {{ getInitials(party.user.name) }}
                    </div>
                </div>
                <div class="details__window-participants-btn" @click.stop="openModal">
                    <Fa :type="'l'"
                        :name="'plus'"/>
                    <ParticipantsModals :participants="participants"
                                        :showModal="show"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import ParticipantsModals from './Actions/components/ParticipantsModals'
import {initialMixin} from "../../../../mixins/initialMixin";
import {cardMixin} from "../../../../mixins/cardMixin";

export default {
    name: "Participants",
    data: () => ({
        show: false,
    }),
    props: ['parties'],
    mixins: [initialMixin, cardMixin],
    components: {ParticipantsModals},
    methods: {
        openModal(e) {
            this.actionModal(e)
        },
    },
    computed: {
        participants() {
            return this.$store.getters.desk.participants
        }
    }
}
</script>
