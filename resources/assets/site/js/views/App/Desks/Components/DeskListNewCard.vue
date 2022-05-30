<template>
    <div class="desks__list-bottom" ref="bottom">
        <div class="desks__list-btn" @click="showNewCardInput">Добавить карточку</div>
        <div class="desks__list-newcard">
            <input type="text" ref="input" class="desks__list-input">
            <div class="desks__item-btns desks__list-btns">
                <Fa :type="'r'"
                    @click.prevent="this.$store.dispatch('addCard')"
                    :name="'check desks__item-confirm'"/>
                <Fa :type="'l'"
                    @click.prevent="hideNewCardInput"
                    :name="'times desks__item-cancel'"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DeskListNewCard",
    data: () => ({}),
    methods: {
        showNewCardInput() {
            document.querySelectorAll('.desks__list-bottom').forEach(el => {
                el.classList.remove('open')
            })
            this.$refs.bottom.classList.add('open')
            this.$refs.input.value = ''
            this.$refs.input.focus()
        },
        hideNewCardInput() {
            this.$refs.bottom.classList.remove('open')
            this.$refs.input.value = ''
        }
    },
}
</script>

<style scoped>

</style>
