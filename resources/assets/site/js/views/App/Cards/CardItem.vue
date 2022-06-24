<template>
    <div v-if="card" class="desks__cards-item draggable"
         draggable="true"
         :class="{success: successAllTasks || status, overdue: status === 2}"
         :data-card-item="card.id"
         @dragstart="onDragStart($event, card)"
         @click="this.$store.dispatch('openModal', card)">
        <CardMiniTags v-if="this.card.tags?.length" :tags="card.tags"/>
        {{ card.name }}
        <div class="desks__cards-labels">
            <div :class="{hidden: !term}" class="desks__cards-term">
                <Fa :type="'r'"
                    :name="'clock icon'"/>
                <span>{{ term }}</span>
            </div>
            <div :class="{hidden: !countAllTasks}" class="desks__cards-term desks__cards-count-tasks">
                <Fa :type="'r'"
                    :name="'check-square icon'"/>
                <div class="count">
                    <span class="count-performed">{{ countPerformTasks }}</span>/<span
                    class="count-notperformed">{{ countAllTasks }}</span>
                </div>
            </div>
            <CardMiniDescription :description="description" :class="{hidden: !description}"  />
        </div>
    </div>
</template>

<script>

import {dateMixin} from "../../../mixins/dateMixin";
import CardMiniTags from './components/CardMiniTags'
import CardMiniDescription from './components/CardMiniDescription'

export default {
    name: "CardItem",
    props: ['card'],
    components: {CardMiniTags, CardMiniDescription},
    computed: {
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
        }
    },
    methods: {
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
        },
    },
    mixins: [dateMixin],
}
</script>

