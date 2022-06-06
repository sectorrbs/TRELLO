<template>
    <div class="scale">
        <div class="scale__percent">
            {{ percent }}%
        </div>
        <div class="scale__progress-bar">
            <div class="scale__progress-bar-check" :class="{success: percent === 100}" :style="{width: percent + '%' }"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CheckListScale",
    props: ['percent'],
}
</script>
