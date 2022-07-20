<template>
    <ActionModal :show="showModal">
        <template v-slot:modal_title>
            Участники
        </template>
        <template v-slot:modal_content>
            <div class="participants__items">
                <div v-for="participant in participants"
                     :key="participant.id"
                     @click="addUserToCardParty(participant, $event)"
                     :class="{active: isParticipant(participant.user.id)}"
                     class="participants__item">
                    <div class="party__modal-logo">
                        <div class="party__modal-initials">
                            {{ getInitials(participant.user.name) }}
                        </div>
                    </div>
                    <div class="participants__item-name">
                        {{ participant.user.name }}
                    </div>
                    <div class="participants__item-check" v-if="isParticipant(participant.user.id)">
                        <Fa :type="'r'"
                            :name="'check details__window-icon'"/>
                    </div>
                </div>
            </div>
        </template>
    </ActionModal>
</template>

<script>

import {cardMixin} from "../../../../../../mixins/cardMixin";
import {initialMixin} from "../../../../../../mixins/initialMixin";

export default {
    name: "ParticipantsModals",
    props: ['showModal', 'participants'],
    mixins: [cardMixin, initialMixin],
    methods: {
        addUserToCardParty(participant, e) {
            let params = {
                card_id: this.$store.getters.cardInfo.id,
                desk_id: this.$store.getters.desk.id,
                user_id: participant.user.id,
                party_id: this.getPartyById(participant)
            }
            this.isActive(e)
                ? this.$store.dispatch('removeUserToCardParty', params)
                : this.$store.dispatch('addUserToCardParty', params)

        },
        isParticipant(id) {
            return this.cardParty.find(el => el.user.id === id)
        },
        isActive(e) {
            let parent = e.target.closest('.participants__item')
            return parent.classList.contains('active')
        },
        getPartyById(participant) {
            let party = this.cardParty.filter(el => el.user.id === participant.user.id)
            return party[0]?.id || null
        }
    },
    computed: {
        cardParty() {
            return this.$store.getters.cardParty
        }
    }
}
</script>
