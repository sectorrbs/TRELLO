<template>
    <div :class="{hidden: !term}" class="desks__cards-term">
        <Fa :type="'r'"
            :name="'clock icon'"/>
        <span>{{ term }}</span>
    </div>
</template>

<script>
export default {
    name: "CardMiniTerms",
    props: ['term']
}
</script>
