<template>
    <div class="settings" @click.prevent>
        <div class="settings__title" @click.prevent>
            Действия с доской
        </div>
        <div class="settings__items">
            <DeleteDesk @open="showTab"
                        @closed="closedTabs"
                        :desk="desk"/>
        </div>
        <div class="settings__items">
            <ReplaceBackground @open="showTab"
                               @click="this.$store.dispatch('getBackgroundsDesks')"
                               @closed="closedTabs"
                               :desk="desk"/>
        </div>
    </div>
</template>

<script>

import DeleteDesk from "./Settings/Desks/DeleteDesk";
import ReplaceBackground from "./Settings/Desks/ReplaceBackground";
import {settingsRoomPartyMixin} from "../../../../mixins/settingsRoomPartyMixin";

export default {
    name: "DeskSettings",
    props: ['desk'],
    components: {DeleteDesk, ReplaceBackground},
    mixins: [settingsRoomPartyMixin],
}
</script>
