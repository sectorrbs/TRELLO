<template>
    <div v-if="checkLists" class="details__window-checklists">
        <CheckList :checkList="checkList"
                       v-for="checkList in checkLists"
                       :key="checkList.id"/>
    </div>
</template>

<script>

import CheckList from "./List";

export default {
    name: "CheckLists",
    props: ['checkLists'],
    components: {CheckList},
}
</script>
