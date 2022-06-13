<template>
    <div class="details__actions-btn" @click.stop="actionModal">
        <Fa :type="'r'"
            :name="'calendar-alt details__actions-icon'"/>
        Даты
        <CardActionModal :show="show">
            <template v-slot:modal_title>
                Даты
            </template>
            <template v-slot:modal_content>
                <Datepicker locale="ru" v-model="date" inline autoApply/>
            </template>
        </CardActionModal>
    </div>
</template>

<script>

import CardActionModal from './ActionModal'
import {cardMixin} from "../../../../../mixins/cardMixin";
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
    name: "ActionDate",
    data: () => ({
        date: new Date(),
        show: false,
        checkListName: 'Даты'
    }),
    mixins: [cardMixin],
    components: {CardActionModal, Datepicker},

}
</script>
