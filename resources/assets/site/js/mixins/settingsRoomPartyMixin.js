export const settingsRoomPartyMixin = {
    data: () => ({
        showDelete: false,
    }),
    props: ['participant', 'countAdmins'],
    methods: {
        closedTabs() {
            document.querySelectorAll('.settings__item-alert').forEach(el => el.classList.remove('show'))
            document.querySelectorAll('.settings__item-btn').forEach(el => el.classList.add('show'))
        },
        showTab(e) {
            this.closedTabs()
            let parent = e.target.closest('.settings__item'),
                btn = parent.querySelector('.settings__item-btn'),
                tab = parent.querySelector('.settings__item-alert')
            if (btn.classList.contains('show')) {
                btn.classList.remove('show')
                tab.classList.add('show')
            } else {
                btn.classList.add('show')
                tab.classList.remove('show')
            }
        },
    },
    computed: {
        isUser() {
            if (this.$store.getters.user) {
                return this.participant.user.id === this.$store.getters.user.id
            }
        },
        isGuest() {
            if (this.$store.getters.user) {
                let user = this.$store.getters.room.participants.find(el => {
                    return el.user.id === this.$store.getters.user.id
                })
                return user?.role.status === 'guest' && this.participant?.role.status === 'participant'
            }
        },
        isParticipantStatusAdmin() {
            return this.participant.role.status === 'admin'
        },
        isParticipantStatusRegular() {
            return this.participant.role.status === 'participant'
        },
        isParticipantStatusGuest() {
            return this.participant.role.status === 'guest'
        },
        userRoleAdminInRoom() {
            return this.$store.getters.userRoleAdminInRoom
        },
        participantsAdminsCount() {
            let party = this.$store.getters.room.participants
            return party.filter(el => el.role.status === 'admin').length < 2
                && this.isParticipantStatusAdmin
        },
        statusUser() {
            if (this.userRoleAdminInRoom) {
                return true;
            } else return !this.userRoleAdminInRoom && !this.isParticipantStatusAdmin;
        }
    },
}
