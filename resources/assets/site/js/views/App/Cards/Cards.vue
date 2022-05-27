<template>
    <div class="desks__cards">
        <div v-if="cards?.length" class="desks__cards-items">
            <CardItem :card="card" v-for="card in cards"/>
        </div>
        <div v-else class="desks__cards-empty">
            Карточек нет
        </div>
    </div>
</template>

<script>

import CardItem from "./CardItem";

export default {
    name: "Cards",
    props: ['cards'],
    components: {CardItem},
}
</script>

<style scoped>

</style>
