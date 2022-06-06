<template>
    <div class="tasks">
        <Task :task="task" v-for="task in tasks" :key="task.id"/>
    </div>
</template>

<script>

import Task from './Task'

export default {
    name: "Index",
    props: ['tasks'],
    components: {Task},
}
</script>
