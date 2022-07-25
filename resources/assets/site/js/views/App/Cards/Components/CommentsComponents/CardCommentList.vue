<template>
    <div class="comments__items">
        <CardCommentItem v-for="comment in comments"
                         :key="comment.id"
                         :comment="comment"/>
    </div>
</template>

<script>

import CardCommentItem from './CardCommentItem'
import {commentMixin} from "../../../../../mixins/commentMixin";

export default {
    name: "CardCommentList",
    props: ['comments'],
    components: {CardCommentItem},
    mixins: [commentMixin],
}
</script>
