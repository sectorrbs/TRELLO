export const settingsMixin = {
    data: () => ({
        showDelete: false,
    }),
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
        isParticipantStatusAdmin() {
            return this.participant.role.status === 'admin'
        },
        userRoleAdmin() {
            return this.$store.getters.userRoleAdmin
        },
        participantsAdminsCount() {
            let party = this.$store.getters.room.participants
            return party.filter(el => el.role.status === 'admin').length
        },
        statusUser() {
            if (this.userRoleAdmin) {
                return true;
            } else return !this.userRoleAdmin && !this.isParticipantStatusAdmin;
        }
    },
}
