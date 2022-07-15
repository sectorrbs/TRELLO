<template>
    <div class="settings__item" @click.prevent="this.$emit('open', $event)">
        <div class="settings__item-btn" :class="{show: !showDelete}">
            Изменить обложку
        </div>
        <div class="settings__item-alert desks__item-alert" :class="{show: showDelete}">
            <DeskBackground :bgId="desk.id_backgrounds_desks" @changeBgId="changeBgId">
                <span class="settings__item-text">Выберите новую обложку</span>
                <template v-slot:btn>
                    <button class="settings__item-btn btn" :class="{disabled}" @click="updateBackgroundDesk">
                        Обновить
                    </button>
                </template>
            </DeskBackground>
        </div>
    </div>
</template>

<script>

import DeskBackground from "../../DeskBackground";

export default {
    name: "ReplaceBackground",
    components: {DeskBackground},
    data: () => ({
        showDelete: false,
        disabled: true,
        idBg: null
    }),
    props: ['desk'],
    methods: {
        changeBgId(id) {
            if (id !== this.desk.id_backgrounds_desks) {
                this.disabled = false
                this.idBg = id
            } else {
                this.disabled = true
            }
        },
        updateBackgroundDesk() {
            this.desk.id_backgrounds_desks = this.idBg
            this.$store.dispatch('updateDesk', this.desk)
            this.$store.dispatch('getRoomPartyNotLoader')
            this.$closed()
        },
    },
}
</script>
