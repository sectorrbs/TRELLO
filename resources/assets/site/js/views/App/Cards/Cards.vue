<template>
    <div class="desks__cards">
        <draggable
            v-if="cards?.length"
            v-model="cards"
            :end="detectMove"
            class="desks__cards-items"
            @start="drag=true"
            @end="detectMove"
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
    props: ['cards'],
    components: {CardItem, draggable},
    methods: {
        detectMove(e){

        }
    }
}
</script>

