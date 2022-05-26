<template>
        <div class="error">
            <div class="error__text">
                {{ error }}
            </div>
        </div>
</template>

<script>

export default {
    name: "Error",
    props: {
        error: {
            type: String
        }
    }
}
</script>
