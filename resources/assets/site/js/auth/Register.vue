<template>
    <div class="auth__wrapper">
        <div class="auth">
            <div class="auth__inner">
                <div class="auth__label">
                    Регистрация
                </div>
                <div class="auth__logo">
                    <Fa :type="'b'"
                        :name="'trello auth__logo-icon'"/>
                    Rafaello
                </div>
                <form class="auth__inputs" @submit.prevent="register">
                    <div class="auth__item">
                        <input type="text"
                               v-model="name"
                               class="auth__input"
                               @input="checkData"
                               placeholder="Введите имя">
                    </div>
                    <div class="auth__item">
                        <input type="email"
                               v-model="email"
                               class="auth__input"
                               @input="checkData"
                               placeholder="Введите email">
                        <AuthError v-if="authErrors"
                                   class="desks__form-error auth__error"
                                   :errors="authErrors.email"/>
                    </div>
                    <div class="auth__item">
                        <input type="password"
                               v-model="password"
                               class="auth__input"
                               @input="checkData"
                               placeholder="Введите пароль">
                        <AuthError v-if="authErrors"
                                   class="desks__form-error auth__error"
                                   :errors="authErrors.password"/>
                    </div>
                    <div class="auth__item">
                        <input type="password"
                               v-model="password_confirmation"
                               class="auth__input"
                               @input="checkData"
                               placeholder="Введите пароль ещё раз">
                    </div>
                    <div class="auth__btns">
                        <button class="btn"
                                :class="{disabled}"
                                style="margin-left: auto"
                                @click.prevent="register">Зарегистрироваться
                        </button>
                        <router-link class="btn" :to="{name: 'login'}">
                            Войти
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
    name: "Register",
    data: () => ({
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
        disabled: true
    }),
    methods: {
        register() {
            this.$store.dispatch('register', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
            })
        },

        checkData() {
            this.email && this.password && this.name && this.password_confirmation
                ? this.disabled = false
                : this.disabled = true

            if (this.authErrors) this.$store.commit('setAuthErrors', null)
        },
    },
    mounted() {
        this.$store.commit('setAuthErrors', null)
    },
    computed: {
        ...mapGetters(['authErrors'])
    },
}
</script>
