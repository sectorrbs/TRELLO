<template>
    <div class="desks__cards">

        <draggable
            v-if="cards?.length"
            v-model="cards"
            class="desks__cards-items"
            group="people"
            @start="drag=true"
            item-key="id">
            <template #item="{element}">
                <CardItem :card="element" :key="element.id"/>
            </template>
        </draggable>

        <div v-else class="desks__cards-empty">

            Карточек пока нет

            <draggable
                v-model="cards"
                group="people"
                @start="drag=true"
                @end="drag=false"
                item-key="id">
                <template #item="{element}"></template>
            </draggable>

        </div>
    </div>
</template>

<script>

import CardItem from "./CardItem";
import draggable from 'vuedraggable'

export default {
    name: "Cards",
    data: () => ({
        empty: 'Карточек нет' ,
        backgroundsCards: null,
    }),
    props: ['cards'],
    components: {CardItem, draggable},
}
</script>

