<template>
    <div v-if="card" class="desks__cards-item draggable"
         style="background-size: cover"
         :style="  {
                     background: card.id_backgrounds_cards
                         ? `url('/storage/backgrounds_cards/thumb_380_380/${getCardBg(card.id_backgrounds_cards)}')`
                         : '#0cc7d4bf'
                          }"
         draggable="true"
         :class="checkPerformed"
         :data-card-item="card.id"
         @dragstart="onDragStart($event, card)"
         @click="this.$store.dispatch('openModal', card)">
        <CardCover v-if="cover" :cover="cover.image"/>
        <CardMiniTags v-if="this.card.tags?.length" :tags="card.tags"/>
        <div class="desks__cards-text">
            <span>
            {{ card.name }}
            </span>
        </div>
        <div class="desks__cards-labels">
            <CardMiniTerms :term="term"/>
            <CardCountTasks :countPerformTasks="countPerformTasks" :countAllTasks="countAllTasks"/>
            <CardMiniAttachments :attachments="attachments" countPerformTasks="countPerformTasks"
                                 :countAllTasks="countAllTasks"/>
            <CardMiniDescription :description="description" :class="{hidden: !description}"/>
        </div>
        <div class="desks__cards-parties" v-if="card.participants?.length">
            <CardMiniParticipants :parties="card.participants"/>
        </div>
    </div>
</template>

<script>

import {dateMixin} from "../../../mixins/dateMixin";
import CardMiniTags from './components/CardMiniTags'
import CardMiniTerms from './components/CardMiniTerms'
import CardMiniAttachments from './components/CardMiniAttachments'
import CardMiniParticipants from './components/CardMiniParticipants'
import CardCountTasks from './components/CardCountTasks'
import CardCover from './components/CardCover'
import CardMiniDescription from './components/CardMiniDescription'

export default {
    name: "CardItem",
    props: ['card'],
    components: {
        CardMiniTags,
        CardMiniDescription,
        CardMiniTerms,
        CardCountTasks,
        CardCover,
        CardMiniAttachments,
        CardMiniParticipants
    },
    computed: {
        cover() {
            let attachment = this.card.attachments || 0
            if (attachment) {
                return attachment.find(el => el.type === 'image' && el.cover)
            }
            return 0
        },
        attachments() {
            return this.card.attachments;
        },
        countPerformTasks() {
            if (this.card.checkLists) {
                let count = 0
                this.card.checkLists.forEach(el => {
                    let tasks = el.tasks.filter(task => task.check === 1)
                    count += tasks.length
                })
                return count
            }
        },
        countAllTasks() {
            if (this.card.checkLists) {
                let count = 0
                this.card.checkLists.forEach(el => {
                    count += el.tasks.length
                })
                return count
            }
        },
        term() {
            let term = this.card.term
            if (term) return this.reformatDateDayAndMonth(term)
        },
        status() {
            if (this.card.term) {
                if (this.currentDate > this.card.term && this.card.status !== 1) {
                    let currentCard = this.card
                    currentCard.status = 2
                    this.$store.dispatch('updateCardOverdue', currentCard)
                    return 2
                }
                if (this.card.status === 1) {
                    return 1
                }
                if (this.card.status === 0) {
                    return 0
                }
                return 0
            }
            return 0
        },
        description() {
            return this.card.description
        },
        successAllTasks() {
            return this.countPerformTasks === this.countAllTasks && this.countAllTasks > 0
        },
        checkPerformed() {
            if (this.successAllTasks || this.status === 1) {
                return 'success'
            } else if (this.status === 2) {
                return 'overdue'
            } else return null;
        }
    },

    methods: {
        getCardBg(id) {
            let bgs = this.$store.getters.backgrounds_cards
            if (bgs) {
                let bg = bgs.find(el => +el.id === +id)
                return bg.image
            }
        },
        onDragStart(e, card) {
            e.dataTransfer.dropEffect = 'move'
            e.dataTransfer.effectAllowed = 'move'
            e.dataTransfer.setData('id', card.id.toString())
            e.dataTransfer.setData('desk_lists_id', card.desk_lists_id.toString())
            e.dataTransfer.setData('cardName', card.name.toString())
            e.dataTransfer.setData('deskList', JSON.stringify(card.deskList))
            e.dataTransfer.setData('checkLists', JSON.stringify(card.checkLists))
            e.dataTransfer.setData('num', JSON.stringify(card.num))
            e.dataTransfer.setData('description', JSON.stringify(card.description))
            e.dataTransfer.setData('term', JSON.stringify(card.term))
            e.dataTransfer.setData('status', JSON.stringify(card.status))
            e.dataTransfer.setData('id_backgrounds_cards', JSON.stringify(card.id_backgrounds_cards))
        },
    },
    mixins: [dateMixin],
}
</script>

