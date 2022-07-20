<template>
    <div class="desks__participants-logo"
         v-for="party in parties"
         :key="party.user.id">
          <span>
                {{ getInitials(party.user.name) }}
          </span>
    </div>
</template>

<script>

import {initialMixin} from "../../../../mixins/initialMixin";

export default {
    name: "CardMiniParticipants",
    props: ['parties'],
    mixins: [initialMixin],
}
</script>
