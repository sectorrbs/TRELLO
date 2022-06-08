<template>
    <div class="desks__cards-item"
         :class="{success: successAllTasks}"
         :data-card-item="card.id"
         @click="this.$store.dispatch('openModal', card)">
        {{ card.name }}
        <div :class="{hidden: !countAllTasks}" class="desks__cards-count-tasks">
            <Fa :type="'r'"
                :name="'check-square icon'"/>
            <div class="count">
                <span class="count-performed">{{ countPerformTasks }}</span>/<span
                class="count-notperformed">{{ countAllTasks }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardItem",
    props: ['card'],
    computed: {
        countPerformTasks() {
            if (this.card.checkLists) {
                let count = 0
                this.card.checkLists.forEach(el => {
                    let tasks = el.tasks.filter(task => task.check === 1)
                    count += tasks.length
                })
                return count
            }
        },
        countAllTasks() {
            if (this.card.checkLists) {
                let count = 0
                this.card.checkLists.forEach(el => {
                    count += el.tasks.length
                })
                return count
            }
        },
        successAllTasks() {
            return this.countPerformTasks === this.countAllTasks && this.countAllTasks > 0
        }
    },
}
</script>

