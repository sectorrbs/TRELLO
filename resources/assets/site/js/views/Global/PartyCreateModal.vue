<template>

    <div class="party__modal modal">
        <div class="party__modal-wrapper modal__wrapper">
            <Fa :type="'l'"
                @click.prevent="this.$store.dispatch('hideModalCreateParty')"
                :name="'times room__modal-close modal__close'"/>
            <div class="party__modal-content">
                <div class="room__modal-title party__modal-title">
                    Пригласить в рабочее пространство
                </div>
                <CreateParticipants/>
            </div>
        </div>
    </div>

</template>

<script>

import CreateParticipants from '../App/Party/Components/CreateParticipants'

export default {
    name: "PartyCreateModal",
    components: {CreateParticipants},
}
</script>
