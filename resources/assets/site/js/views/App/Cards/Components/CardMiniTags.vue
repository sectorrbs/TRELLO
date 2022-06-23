<template>
    <div class="desks__cards-tags"
         :class="[enlarged ? 'enlarged' : '']"
         @click.prevent.stop="updateViewTags">
        <div class="desks__cards-tag"
             :style="{background: tag.color}"
             v-for="tag in tags"
             :key="tag.id">
            <span>
                {{ tag.title }}
            </span>

        </div>
    </div>
</template>

<script>
export default {
    name: "CardMiniTags",
    props: ['tags'],
    methods: {
        updateViewTags() {
            let desk = this.$store.getters.desk
            desk.is_tag_enlarged = !desk.is_tag_enlarged
            this.$store.dispatch('updateDesk', desk)
        }
    },
    computed: {
        enlarged() {
            return this.$store.getters.desk.is_tag_enlarged
        }
    }
}
</script>
