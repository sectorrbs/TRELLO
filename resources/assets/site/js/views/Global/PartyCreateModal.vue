<template>

    <div class="party__modal modal">
        <div class="party__modal-wrapper modal__wrapper">
            <Fa :type="'l'"
                @click.prevent="this.$store.dispatch('hideModalCreateParty')"
                :name="'times room__modal-close modal__close'"/>
            <div class="party__modal-content">
                <div class="room__modal-title">
                    Пригласить
                    в рабочее пространство
                </div>
                <div class="party__modal-search">
                    <input type="text"
                           class="party__modal-input form-input"
                           v-model="text"
                           @input="searchUsers"
                           placeholder="Адрес электронной почты или имя">
                    <div class="party__modal-window" :class="{show}">
                        <div class="party__modal-window-text" ref="text">
                            Похоже, этот человек ещё не участник Rafaello
                        </div>
                        <div class="party__modal-result hide" ref="result">
                            <Fa v-if="!users" :type="'d'"
                                :name="'spinner party__modal-spinner'"/>
                            <div v-else-if="!users.length" class="party__modal-window-text" ref="text">
                                Похоже, этот человек ещё не участник Rafaello
                            </div>
                            <div v-else
                                 class="party__modal-users"
                                 v-for="user in users"
                                 :key="user.id">
                                <div class="party__modal-user">
                                    {{ user.name }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "PartyCreateModal",
    data() {
        return {
            text: null,
            show: false
        }
    },
    mounted() {
        window.addEventListener('click', e => {
            if (e.target.classList.contains('modal')) {
                this.$store.dispatch('hideModalCreateParty')
            }
        })
        window.addEventListener('click', e => {
            if (e.target.className === 'party__modal-search'
                || e.target.className === 'room__modal-title'
                || e.target.className === 'party__modal-content'
                || e.target.className === 'modal') {
                this.show = false
            }
        })
    },
    methods: {
        searchUsers() {
            if (this.text) {
                this.windowShow()
            } else {
                this.windowHide()
            }
            if (this.text.length > 2) {
                this.$store.dispatch('getUsers', this.text)
                this.$refs.text.classList.add('hide')
                this.$refs.result.classList.remove('hide')
            } else {
                this.$store.commit('setUsers', null)
                this.$refs.text.classList.remove('hide')
                this.$refs.result.classList.add('hide')
            }
        },
        windowShow() {
            this.show = true
        },
        windowHide() {
            this.show = false
        },
    },
    computed: {
        users() {
            return this.$store.getters.users;
        }
    }
}
</script>
