<template>
         <div class="desks__cards-item">
             {{card.name}}
         </div>
</template>

<script>
export default {
    name: "CardItem" ,
    props: ['card'],
}
</script>

<style scoped>

</style>
