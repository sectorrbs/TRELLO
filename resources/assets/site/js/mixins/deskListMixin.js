export const deskListMixin = {
    computed: {
        isGuest() {
            if (this.$store.getters.user && this.$store.getters.room) {
                let user = this.$store.getters.room.participants
                    .find(el => el.user.id === this.$store.getters.user.id)
                return user.role.status === 'guest'
            }
        }
    }
}
