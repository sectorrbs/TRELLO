<template>
    <div class="party__select" ref="select">
        <div class="party__select-parent"
             ref="selectRole"
             :data-select-role="participant.role.id"
             @click.stop="showRoleList">
            <span data-select-label ref="selectLabel">{{ participant.role.label }}</span>
            <Fa :type="'s'"
                :name="'chevron-down party__btns-icon'"/>
        </div>
        <div class="party__select-items">
            <CreateParticipantsRole v-for="role in roles"
                                    :role="role"
                                    :roleIsDefault="selectedRole"
                                    @selectRole="selectRole"
                                    :key="role.id"/>
        </div>
    </div>
</template>

<script>

import CreateParticipantsRole from "./createParticipantsRole"
import {partyMixin} from "../../../mixins/partyMixin";

export default {
    name: "CreateParticipantsSelect",
    components: {CreateParticipantsRole},
    data: () => ({
        selectedRole: null,
    }),
    methods: {
        selectRole(e, id) {
            this.$refs.selectLabel.textContent = e.target.dataset.role
            this.$refs.selectRole.dataset.selectRole = this.defaultRoleId = id
            this.$store.dispatch('updateParticipantRole',
                {participant: this.participant, desk_id: this.$store.getters.desk.id, id})
        },
    },
    mixins: [partyMixin]
}
</script>
