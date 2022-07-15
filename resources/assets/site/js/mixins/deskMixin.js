export const deskMixin = {
    computed: {
        userIsParticipantDesk() {
            if(this.$store.getters.user){
                return this.desk.participants
                    .find(el => el.user.id === this.$store.getters.user.id)
            }
        },
        isUserGuest() {
            if (this.$store.getters.user) {
                let user = this.party.room.participants
                    .find(el => el.user.id === this.$store.getters.user.id)
                return user.role.status === 'guest'
            }
        }
    }
}
