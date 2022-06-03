<template>
    <div class="settings">
        <div class="settings__title">
            Действия с доской
        </div>
        <div class="settings__items">
            <DeleteDesk :desk="desk"/>
        </div>
    </div>
</template>

<script>

import DeleteDesk from "./Settings/Desks/DeleteDesk";

export default {
    name: "DeskSettings",
    props: ['desk'],
    components: {DeleteDesk},

}
</script>
