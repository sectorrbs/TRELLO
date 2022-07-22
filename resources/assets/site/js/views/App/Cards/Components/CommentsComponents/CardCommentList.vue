<template>
    <div class="comments__items">
        <CardCommentItem v-for="comment in comments"
                         :key="comment.id"
                         :comment="comment"/>
    </div>
</template>

<script>

import CardCommentItem from './CardCommentItem'

export default {
    name: "CardCommentList",
    props: ['comments'],
    components: {CardCommentItem}
}
</script>
