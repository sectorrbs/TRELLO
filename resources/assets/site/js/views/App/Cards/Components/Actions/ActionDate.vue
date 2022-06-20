<template>
    <div class="details__actions-btn" @click.stop="actionModal">
        <Fa :type="'r'"
            :name="'calendar-alt details__actions-icon'"/>
        Даты
        <ActionModal :show="show">
            <template v-slot:modal_title>
                Даты
            </template>
            <template v-slot:modal_content>
                <Datepicker locale="ru"
                            monthNameFormat="long"
                            v-model="date"
                            inline
                            textInput
                            inlineWithInput
                            @cleared="clearValue"
                            @update:modelValue="handleDate"
                            autoApply/>
                <button @click.prevent="termSelection" :class="{disabled}" class="btn-date details__actions-btn">
                    Назначить срок
                </button>
            </template>
        </ActionModal>
    </div>
</template>

<script>

import {cardMixin} from "../../../../../mixins/cardMixin";
import {dateMixin} from "../../../../../mixins/dateMixin";
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
    name: "ActionDate",
    data: () => ({
        date: new Date(),
        show: false,
        checkListName: 'Даты',
        disabled: false,
    }),
    methods: {
        clearValue() {
            this.disabled = true;
        },
        handleDate() {
            this.disabled = false;
        },
        termSelection() {
            let term = document.querySelector('.dp__input').value
            this.$store.getters.cardInfo.term = term
            this.$store.getters.cardInfo.status = term >= this.currentDate ? 0 : 2
            this.$store.dispatch('updateCard', this.$store.getters.cardInfo)
        }
    },
    mixins: [cardMixin, dateMixin],
    components: {Datepicker},
}
</script>
