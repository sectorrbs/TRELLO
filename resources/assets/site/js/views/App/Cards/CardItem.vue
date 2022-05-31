<template>
         <div class="desks__cards-item" @click="this.$store.dispatch('openModal', card)">
             {{card.name}}
         </div>
</template>

<script>
export default {
    name: "CardItem" ,
    props: ['card'],
}
</script>

