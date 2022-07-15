<template>
    <div class="party__select" ref="select">
        <div class="party__select-parent" :data-select-role="defaultRoleId" @click="showRoleList">
            {{ defaultRole }}
            <Fa :type="'s'"
                :name="'chevron-down party__btns-icon'"/>
        </div>
        <div class="party__select-items">
            <div class="party__select-item"
                 :class="{disabled: defaultRole === role.label}"
                 @click="selectRole($event, role.id)"
                 v-for="role in roles"
                 :key="role.id"
                 :data-role="role.label">
                {{ role.label }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CreateParticipantsSelect",
    data: () => ({
        defaultRole: 'Участник',
        defaultRoleId: 2
    }),
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
        showRoleList() {
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
            this.defaultRole = e.target.dataset.role
            this.defaultRoleId = id
        },
    },
    computed: {
        roles() {
            return this.$store.getters.roles
        }
    }
}
</script>
