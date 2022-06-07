<template>
    <div class="content">
        <div class="container">

            <div class="login">

                <div class="login__inner">

                    <input type="text"
                           v-model="login"
                           class="login__input form-input"
                           placeholder="Введите логин">
                    <input type="text"
                           v-model="password"
                           class="login__input form-input"
                           placeholder="Введите пароль">

                    <div class="login__btns">
                        <button class="btn" @click="logins">Войти</button>
                        <button class="btn">Зарегистрироваться</button>
                    </div>

                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data: () => ({
        login: null,
        password: null
    }),
    methods: {
        logins() {
            this.$store.dispatch('login', {login: this.login, password: this.password})
        },
    },
}
</script>

