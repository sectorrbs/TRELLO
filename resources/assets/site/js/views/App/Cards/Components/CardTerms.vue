<template>
    <div class="details__window-participants-subtitle">
        Срок
        <div class="details__window-term">
            <div class="tasks__item-checkbox">
                <input type="checkbox" class="custom-checkbox"
                       :id="0"
                       :checked="card.status === 1"
                       :name="0"
                       @change="checkTerm">
                <label :for="0"></label>
            </div>
            <div class="details__window-term-box">
                {{ card.term }}
                <div class="details__window-term-label"
                     :class="{disabled : card.status !== 1 && card.status !== 2}">
                    <span class="label-checked" v-if="card.status === 1 ">
                        Выполнено
                    </span>
                    <span class="label-overdue" v-else-if="card.status === 2">
                        Просрочено
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {dateMixin} from "../../../../mixins/dateMixin";

export default {
    name: "CardTerms",
    data: () => ({}),
    props: ['card'],
    methods: {
        checkTerm(e) {
            let term = this.$store.getters.cardInfo.term
            let statusTerm = term >= this.currentDate ? 0 : 2
            this.$store.getters.cardInfo.status = !e.target.checked ? statusTerm : 1
            this.$store.dispatch('updateCard', this.$store.getters.cardInfo)
        },
    },
    mixins: [dateMixin],
}
</script>
