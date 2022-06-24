<template>
    <div :class="{hidden: !countAllTasks}" class="desks__cards-term desks__cards-count-tasks">
        <Fa :type="'r'"
            :name="'check-square icon'"/>
        <div class="count">
            <span class="count-performed">{{ countPerformTasks }}</span>/<span
            class="count-notperformed">{{ countAllTasks }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardCountTasks" ,
    props: ['countAllTasks', 'countPerformTasks']
}
</script>
