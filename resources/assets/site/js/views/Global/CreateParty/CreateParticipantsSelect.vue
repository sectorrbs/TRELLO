<template>
    <div class="party__select" ref="select">
        <div class="party__select-parent"
             ref="selectRole"
             :data-select-parent="parent"
             :data-select-role="currentRole?.id || defaultRoleId"
             @click.stop="showRoleList">
            <span data-select-label ref="selectLabel">{{ currentRole?.label || roleIsDefault }}</span>
            <Fa :type="'s'"
                :name="'chevron-down party__btns-icon'"/>
        </div>
        <div class="party__select-items">
            <CreateParticipantsRole v-for="role in roles"
                                    :role="role"
                                    :user="partyUser"
                                    :roleIsDefault="roleIsDefault"
                                    @selectRole="selectRole"
                                    :key="role.id"/>
        </div>
    </div>
</template>

<script>

import CreateParticipantsRole from "./createParticipantsRole"

export default {
    name: "CreateParticipantsSelect",
    data: () => ({
        roleIsDefault: 'Участник',
        defaultRoleId: 2,
    }),
    components: {CreateParticipantsRole},
    props: {
        currentRole: {
            type: Object,
            default: null
        },
        selectNewRole: {
            type: Boolean,
            default: null
        },
        parent: {
            type: String,
            default: null
        },
        partyUser: {
            type: Object,
            default: null
        }
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
        getCurrentRoleLabel(p) {
            return p.querySelector('[data-select-label]').textContent
        },
        showRoleList(e) {
            let p = e.target.closest('.party__select-parent')
            this.getActiveSelect(e)
            this.roleIsDefault = this.getCurrentRoleLabel(p)
            this.displayRoleList()
            this.$store.dispatch('getRoles')
        },
        displayRoleList() {
            if (this.$refs.select.classList.contains('show') && this.$refs.select) {
                this.$refs.select.classList.remove('show')
            } else {
                this.$refs.select.classList.add('show')
            }
        },
        selectRole(e, id) {
            this.$refs.selectLabel.textContent = this.roleIsDefault = e.target.dataset.role
            this.$refs.selectRole.dataset.selectRole = this.defaultRoleId = id
            if (this.partyUser.id === this.user.id) {
                this.checkingRoleCurrentUser(e)
            } else {
                if (this.isCurrentParty()) {
                    this.getUserOnlyAdmin()
                }
            }
        },
        getActiveSelect(e) {
            if (!e.target.closest('.party__select').classList.contains('show')) {
                document.querySelectorAll('.party__select').forEach(el => el.classList.remove('show'))
            }
        },
        isCurrentParty() {
            return this.parent === 'currentParty'
        },
        getUserOnlyAdmin() {
            let countAdmins = 0;
            let parentSelect = document.querySelectorAll(`[data-select-parent="${this.parent}"]`)
            let currentsSelect = document.querySelectorAll('.party__current-select')
            parentSelect.forEach(el => {
                if (+el.dataset.selectRole === 1) {
                    countAdmins++
                }
            })

            if (countAdmins < 2) {
                currentsSelect.forEach(el => {
                    let currentParentSelect = el.querySelector(`[data-select-parent="${this.parent}"]`)
                    if (+currentParentSelect.dataset.selectRole === 1) {
                        console.log(12121)
                        el.classList.add('disabled')
                    } else {
                        el.classList.remove('disabled')
                    }
                })
            } else {
                currentsSelect.forEach(el => {
                    el.classList.remove('disabled')
                })
            }
        },
        checkingRoleCurrentUser(e) {
            if (e.target.dataset.role !== 'Admin') {
                document.querySelectorAll('.party__current-select')
                    .forEach(el => el.classList.add('disabled'))
            }
        }
    },
    computed: {
        roles() {
            return this.$store.getters.roles
        },
        user() {
            return this.$store.getters.user
        }
    },
}
</script>
