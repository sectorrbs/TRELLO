<template>

    <div class="party__modal modal">
        <div class="party__modal-wrapper modal__wrapper">
            <Fa :type="'l'"
                @click.prevent="this.$store.dispatch('hideModalCreateParty')"
                :name="'times room__modal-close modal__close'"/>
            <div class="party__modal-content">
                <div class="room__modal-title party__modal-title">
                    <slot name="title"></slot>
                </div>
                <slot name="content"></slot>
            </div>
        </div>
    </div>

</template>

<script>

import CreateParticipants from '../App/RoomParty/Components/CreateParticipants'

export default {
    name: "PartyCreateModal",
    components: {CreateParticipants},
}
</script>
