<template>
    <div v-if="error" class="error">
        <div class="error__text">
            {{ error }}
        </div>
    </div>
</template>

<script>

export default {
    name: "Error",
    props: ['error']
}
</script>
