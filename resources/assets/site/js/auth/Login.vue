<template>
    <div class="auth__wrapper">
        <div class="auth">
            <div class="auth__inner">
                <div class="auth__label">
                    Вход в систему
                </div>
                <div class="auth__logo">
                    <Fa :type="'b'"
                        :name="'trello auth__logo-icon'"/>
                    Rafaello
                </div>
                <form class="auth__inputs" @submit.prevent="logIn">
                    <div class="auth__item">
                        <input type="email"
                               v-model="email"
                               class="auth__input"
                               placeholder="Введите email"
                               @input="checkData">
                    </div>
                    <div class="auth__item">
                        <input type="password"
                               v-model="password"
                               class="auth__input"
                               placeholder="Введите пароль"
                               @input="checkData">
                        <AuthError v-if="authErrors" class="auth__error" :errors="authErrors.password"/>
                    </div>
                    <AuthError v-if="authErrors" class="auth__error" :errors="authErrors.email"/>
                    <div class="auth__btns">
                        <button :class="{disabled}" class="btn" @click.prevent="logIn">Войти</button>
                        <router-link class="btn" :to="{name: 'register'}">
                            Зарегистрироваться
                        </router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
    name: "Login",
    data: () => ({
        email: null,
        password: null,
        disabled: true
    }),
    mounted() {
        this.$store.commit('setAuthErrors', null)
    },
    methods: {
        logIn() {
            if (!this.disabled) this.$store.dispatch('login', {email: this.email, password: this.password})
        },
        checkData() {
            this.email && this.password
                ? this.disabled = false
                : this.disabled = true

            if (this.authErrors) this.$store.commit('setAuthErrors', null)
        },
    },
    computed: {
        ...mapGetters(['authErrors'])
    },
}
</script>

