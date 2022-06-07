<template>
    <form class="details__window-card-form" ref="cardForm" @submit.prevent="renameCard">
        <input type="text"
               class="details__window-card-rename"
               :value="oldName"
               @input="changeCardName"
               placeholder="Введите название карточки">
        <div class="details__window-card-renamebtns">
            <div class="details__window-cardinfo-btn red" @click.prevent="this.$emit('hideField')">
                <Fa :type="'r'"
                    :name="'times details__window-icon'"/>
            </div>
            <div class="details__window-cardinfo-btn green" @click="renameCard">
                <Fa :type="'r'"
                    :name="'check details__window-icon'"/>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: "cardFormRenameField",
    data: () => ({
        newName: null
    }),
    props: ['card', 'oldName'],

    methods: {
        renameCard(e) {
            this.$refs.cardForm.classList.remove('show')
            if (this.newName) {
                this.card.name = this.newName
                this.$store.dispatch('updateCard', this.card)
            }
        },
        changeCardName(e) {
            this.newName = e.target.value
        }
    },
}
</script>
