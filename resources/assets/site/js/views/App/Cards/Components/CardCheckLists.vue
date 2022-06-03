<template>
    <div v-if="checkLists" class="details__window-checklists">
        <CardCheckList :checkList="checkList"
                       @assayExistsCheckLists="assayExistsCheckLists"
                       v-for="checkList in checkLists"
                       :key="checkList.id"/>
    </div>
</template>

<script>

import CardCheckList from "./CardCheckList";

export default {
    name: "CardCheckLists",
    props: ['checkLists'],
    components: {CardCheckList},
    methods: {
        assayExistsCheckLists() {

        }
    },
}
</script>

<style scoped>

</style>
