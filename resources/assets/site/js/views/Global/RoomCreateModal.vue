<template>

    <div class="room__modal modal" :class="{show}">
        <div class="room__modal-wrapper modal__wrapper">
            <Fa :type="'l'"
                @click.prevent="this.$store.dispatch('hideModalCreateRoom')"
                :name="'times room__modal-close modal__close'"/>
            <div class="room__modal-content">
                <div class="room__modal-title">
                    Создайте рабочее пространство
                </div>
                <div class="room__modal-text">
                    Участники команды смогут получать удобный доступ ко всем доскам.
                </div>
                <div class="room__modal-name">
                    <input type="text"
                           class="room__modal-input form-input"
                           v-model="name"
                           placeholder="Введите навзание пространства"
                           @input="checkEmptyField">
                    <span class="room__modal-subtext">Укажите название вашей команды, компании или организации.</span>
                </div>
                <div class="room__modal-description">
                    <textarea type="text"
                              class="room__modal-input form-input"
                              v-model="description"
                              placeholder="Введите навзание комнаты"></textarea>
                    <span
                        class="room__modal-subtext">Опишите рабочее пространство <strong>(необязательно)</strong></span>
                </div>
                <button ref="roomBtn" class="room__modal-btn btn" @click.stop="createRoom"
                        :class="{disabled : disabled}">
                    <Fa :type="'d'"
                        :name="'spinner-third room__modal-icon'"/>
                    <span>
                    Создать пространство
                    </span>
                </button>
            </div>
            <div class="room__modal-images images">
                <img class="images-desks" src="/storage/content/room_img.svg" alt="room_img">
                <img class="images-bg" src="/storage/content/room_bg.svg" alt="room_bg">
            </div>
        </div>
    </div>

</template>

<script>

import {mapActions} from 'vuex'

export default {
    name: "RoomCreateModal",
    data() {
        return {
            disabled: true,
            name: null,
            description: null
        }
    },
    mounted() {
        window.addEventListener('click', e => {
            if (e.target.classList.contains('modal')) {
                this.$store.dispatch('hideModalCreateRoom')
            }
        })
    },
    props: ['show'],
    methods: {
        openModal(data) {
            this.id = data.id
            this.text = data.text
            this.action = data.action
        },
        checkEmptyField(e) {
            this.disabled = e.target.value === '';
        },
        createRoom(e) {
            this.$store.dispatch('createRoom', {name: this.name, description: this.description})
            this.$refs.roomBtn.classList.add('load')
            setTimeout(() => {
                this.$store.dispatch('hideModalCreateRoom')
                this.$refs.roomBtn.classList.remove('load')
            }, 300)
        }
    },
}
</script>

