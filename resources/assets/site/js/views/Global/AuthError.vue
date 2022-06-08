<template>
    <div v-if="errors" class="error">
        <div v-for="error in errors" class="error__text">
            {{ error }}
        </div>
    </div>
</template>

<script>
export default {
    name: "AuthError",
    props: ['errors']
}
</script>

