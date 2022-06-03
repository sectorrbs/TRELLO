<template>
    <div class="settings">
        <div class="settings__title">
            Действия со списком
        </div>
        <div class="settings__items">
            <DeleteList :list="list" />
        </div>
    </div>
</template>

<script>

import DeleteList from "./Settings/Lists/DeleteList";

export default {
    name: "DeskListSettings",
    props: ['list'],
    components: {DeleteList},

}
</script>
