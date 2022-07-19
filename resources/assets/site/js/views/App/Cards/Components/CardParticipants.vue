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
                <div class="details__window-participants-btn">
                    <Fa :type="'l'"
                        :name="'plus'"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {initialMixin} from "../../../../mixins/initialMixin";

export default {
    name: "Participants",
    props: ['parties'],
    mixins: [initialMixin],
}
</script>
