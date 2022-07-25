<template>
    <div class="comments__item" v-if="content">
        <div class="comments__item-logo">
                <span>
                    {{ getInitials(this.$store.getters.user.name) }}
                </span>
        </div>
        <div class="comments__item-inner">
            <div class="comments__item-name">
                {{ this.$store.getters.user.name }}
                <div class="comments__item-date">
                    {{ comment.created_at }}
                </div>
            </div>
            <div class="comments__item-wrapper">
                <div class="comments__box comments__item-box">
                 <textarea class="comments__field comments__item-field"
                           @input="autoSize"
                           v-model="comment.text"
                           placeholder="Напишите комментарий..."></textarea>
                    <CardCommentActions :comment_id="comment.id"
                                        :disabled="disabled"/>
                </div>
                <div class="comments__item-text">
                    <span v-html="text"></span>
                </div>
                <div class="comments__item-actions">
                    <CommentChange @disabled="disabled=false"
                                   @updateSize="updateSize"
                                   :comment_id="comment.id"/>
                    <CommentDelete :comment_id="comment.id"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {initialMixin} from "../../../../../mixins/initialMixin";
import {commentMixin} from "../../../../../mixins/commentMixin";
import CommentDelete from "./Actions/CommentDelete";
import CommentChange from "./Actions/CommentChange";
import CardCommentActions from "./CardCommentActions";

export default {
    name: "CardCommentItem",
    props: ['comment'],
    components: {CommentDelete, CommentChange, CardCommentActions},
    data: () => ({
        disabled: true
    }),
    mixins: [initialMixin, commentMixin],
}
</script>

