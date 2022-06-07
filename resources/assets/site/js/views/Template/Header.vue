<template>
    <header class="header">
        <div class="header__logo">
            <Fa :type="'b'"
                :name="'trello header__logo-icon'"/>
            Rafaello
        </div>
        <div class="header__btn">Создать</div>

        <HeaderAcc/>

    </header>
</template>

<script>

import HeaderAcc from "./components/HeaderAcc";

export default {
    name: "Header",
    components: {HeaderAcc},
}
</script>

