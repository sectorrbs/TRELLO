<template>
    <div class="party__modal-search">
        <input type="text"
               class="party__modal-input form-input"
               v-model="text"
               @input="searchUsers"
               placeholder="Адрес электронной почты или имя">
        <div class="party__modal-window" :class="{show:displayWindow}">
            <div class="party__modal-window-text" ref="text">
                Похоже, этот человек ещё не участник Rafaello
            </div>
            <div class="party__modal-result hide" ref="result">
                <Fa v-if="!users" :type="'d'"
                    :name="'spinner party__modal-spinner'"/>
                <div v-else-if="!users.length" class="party__modal-window-text" ref="text">
                    Похоже, этот человек ещё не участник Rafaello
                </div>
                <CreateParticipantsUsers @clearInput="text=null" v-else :users="users"/>
            </div>
        </div>
    </div>
</template>

<script>

import CreateParticipantsUsers from './CreateParticipantsUsers'

export default {
    name: "CreateParticipantsSearch",
    data() {
        return {
            text: null,
        }
    },
    components: {CreateParticipantsUsers},
    props: ['show'],
    methods: {
        searchUsers() {

            let text = document.querySelector('.party__modal-window-text')
            let results = document.querySelector('.party__modal-result')

            if (this.text) {
                this.windowShow()
            } else {
                this.windowHide()
            }
            if (this.text.length > 2) {
                this.$store.dispatch('getUsers', this.text)
                text.classList.add('hide')
                results.classList.remove('hide')
            } else {
                this.$store.commit('setUsers', null)
                text.classList.remove('hide')
                results.classList.add('hide')
            }
        },
        windowShow() {
            this.$store.dispatch('showWindowUsersList')
        },
        windowHide() {
            this.$store.dispatch('hideWindowUsersList')
        },
    },
    watch: {
        displayWindow(status) {
            if (!status) {
                this.text = ''
            }
        }
    },
    computed: {
        users() {
            return this.$store.getters.users;
        },
        displayWindow() {
            return this.$store.getters.displayWindow;
        }
    }
}
</script>
