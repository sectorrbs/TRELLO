<template>
    <div class="room__desks-create">
        <div class="room__desks-add" @click="showDeskAddForm">
            <Fa :type="'r'"
                :name="'plus desks__add-icon'"/>
            Добавить доску
        </div>
        <div class="room__desks-form" :class="{show}">
            <DeskCreateForm/>
        </div>
    </div>
</template>

<script>

import DeskCreateForm from "../../Desks/Components/DeskCreateForm";

export default {
    name: "RoomDeskAdd",
    data: () => ({
        show: false,
    }),
    components: {DeskCreateForm},
    methods: {
        showDeskAddForm() {
            this.show = !this.show
        }
    }
}
</script>
