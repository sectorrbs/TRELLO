<template>
    <div class="tasks">
        <Task :task="task" v-for="task in tasks" :key="task.id"/>
    </div>
</template>

<script>

import Task from './Task'
import ActionCardBtn from '../Cards/Components/Actions/ActionСardBtn'
import CardCheckListCreateField from '../Cards/Components/CardCheckListCreateField'

export default {
    name: "Index",
    props: ['tasks'],
    components: {Task, ActionCardBtn, CardCheckListCreateField},
}
</script>
