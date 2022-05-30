<template>
    <div class="desks__list-bottom" ref="bottom">
        <div class="desks__list-btn" @click="showNewCardInput">
            <Fa :type="'r'"
                :name="'plus'"/>
            Добавить карточку
        </div>
        <form @submit.prevent="addNewCard" class="desks__list-newcard">
            <input type="text" ref="input" class="desks__list-input" placeholder="Введите заголовок для этой карточки">
            <div class="desks__item-btns desks__list-btns">
                <Fa :type="'r'"
                    @click.prevent="addNewCard"
                    :name="'check desks__item-confirm'"/>
                <Fa :type="'l'"
                    @click.prevent="hideNewCardInput"
                    :name="'times desks__item-cancel'"/>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "DeskListNewCard",
    data: () => ({}),
    props: ['list'],
    methods: {
        showNewCardInput() {
            this.$closed('addNewCard')
            this.$refs.bottom.classList.add('open')
            this.$refs.input.value = ''
            this.$refs.input.focus()
        },
        hideNewCardInput() {
            this.$refs.bottom.classList.remove('open')
            this.$refs.input.value = ''
        },
        addNewCard() {

            let data = {
                desk_id: this.list.desk_id,
                desk_lists_id: this.list.id,
                name: this.$refs.input.value
            }

            if (this.$refs.input.value) {
                this.$store.dispatch('addCard', data)
                this.$emit('addNewCard', data)
                this.$refs.bottom.classList.remove('open')
            }
            this.$refs.input.focus()
        }
    },
}
</script>
