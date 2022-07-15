<template>
    <div class="desks__info">
        <div class="desks__info-wrapper">
            <div class="desks__info-name">
                {{ desk.name }}
            </div>
        </div>
            <DeskInfoParticipants :participants="desk.participants"/>
    </div>
</template>

<script>

import DeskInfoParticipants from './Info/DeskInfoParticipants'

export default {
    name: "DeskInfo",
    props: ['desk'],
    components: {DeskInfoParticipants},
}
</script>
