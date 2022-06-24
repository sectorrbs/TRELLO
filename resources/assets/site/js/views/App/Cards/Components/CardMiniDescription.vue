<template>
    <div class="desks__cards-term desks__cards-description"
         :class="[enlarged ? 'enlarged' : '']"
         @click.prevent.stop="updateViewDescription">
        <Fa :type="'r'"
            :name="'line-columns icon'"/>
        <div class="desks__cards-description-text">
            <span>
            {{ description }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardMiniDescription",
    props: ['description'],
    methods: {
        updateViewDescription() {
            let desk = this.$store.getters.desk
            desk.is_descr_enlarged = !desk.is_descr_enlarged
            this.$store.dispatch('updateDesk', desk)

        }
    },
    computed: {
        enlarged() {
            return this.$store.getters.desk.is_descr_enlarged
        }
    }
}
</script>
