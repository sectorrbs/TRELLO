<template>
    <div class="party__item-settings" @click.stop="actionModal">
        <Fa :type="'l'"
            :name="'cog room__empty-icon'"/>
        <ActionModal :show="show">
            <template v-slot:modal_title>
                Даты
            </template>
            <template v-slot:modal_content>

            </template>
        </ActionModal>
    </div>
</template>

<script>

import {cardMixin} from "../../../../../mixins/cardMixin";

export default {
    name: "ParticipantsSettings",
    data: () => ({
        show: false,
    }),
    methods: {
        openSettings() {

        },
    },
    mixins: [cardMixin],
}
</script>

