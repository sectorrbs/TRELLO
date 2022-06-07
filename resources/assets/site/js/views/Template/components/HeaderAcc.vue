<template>
    <div v-if="user" class="header__user">
        <div class="header__acc" @click.stop="show = !show">
            <span class="header__acc-initials"> {{ user.initials }}</span>
        </div>
        <GlobalModal @hide="show=!show" class="header__user-modal" :show="show">
            <template v-slot:modal_title>
                Учетная запись
            </template>
            <template v-slot:modal_content>
                <div class="global-modal-items">
                    <div class="global-modal-item" @click="this.$store.dispatch('logout')">
                        Выйти
                    </div>
                </div>
            </template>
            <template v-slot:modal_bottom>
                {{ user.name }}
            </template>
        </GlobalModal>
    </div>

</template>

<script>
export default {
    name: "HeaderAcc",
    data: () => ({
        show: false,
    }),
    mounted() {
        window.addEventListener('click', e => {
            if (!e.target.classList.contains('header__acc') &&
                !e.target.classList.contains('global-modal') &&
                !e.target.classList.contains('global-modal-top') &&
                !e.target.classList.contains('global-modal-title')) {
                document.querySelectorAll('.global-modal')
                    .forEach(el => {
                        el.classList.remove('show')
                    })
            }
        })
    },
    methods: {},
    computed: {
        user() {
            return this.$store.getters.user
        }
    },
}
</script>

<style scoped>

</style>
