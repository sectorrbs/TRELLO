<template>
    <div class="desks__cards-cover">
        <img class="desks__cards-cover-img"
             :src="'/storage/cards_images/'+ cover"
             :alt="cover">
    </div>
</template>

<script>
export default {
    name: "CardCover",
    props: ['cover']
}
</script>
