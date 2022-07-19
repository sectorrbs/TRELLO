export const partyMixin = {
    props: {
        participant: {
            type: Object,
            default: null
        },
    },
    mounted() {
        window.addEventListener('click', e => {
            if (!e.target.classList.contains('party__select-parent') &&
                !e.target.classList.contains('party__btns-icon') &&
                this.$refs.select) {
                this.$refs.select.classList.remove('show')
            }
        })
    },
    methods: {
        showRoleList(e) {
            let p = e.target.closest('.party__select-parent')
            this.getActiveSelect(e)
            this.displayRoleList()
            this.setSelectedRole(e)
            this.$store.dispatch('getRoles')
        },
        setSelectedRole(e) {
            let selectRole = this.$refs.selectLabel
            this.selectedRole = selectRole.textContent
        },
        displayRoleList() {
            if (this.$refs.select.classList.contains('show') && this.$refs.select) {
                this.$refs.select.classList.remove('show')
            } else {
                this.$refs.select.classList.add('show')
            }
        },
        getActiveSelect(e) {
            if (!e.target.closest('.party__select').classList.contains('show')) {
                document.querySelectorAll('.party__select')
                    .forEach(el => el.classList.remove('show'))
            }
        },
    },
    computed: {
        roles() {
            return this.$store.getters.roles
        },
    },
}
