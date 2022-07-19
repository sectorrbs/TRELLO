export const deskMixin = {
    computed: {
        IsParticipant() {
            if (this.$store.getters.user) {
                return this.desk.participants
                    .find(el => el.user.id === this.$store.getters.user.id)
            }
        },
        isGuest() {
            if (this.$store.getters.user) {
                let user = this.party.room.participants
                    .find(el => el.user.id === this.$store.getters.user.id)
                return user?.role.status === 'guest' || !user?.role.status
            }
        }
    }
}
