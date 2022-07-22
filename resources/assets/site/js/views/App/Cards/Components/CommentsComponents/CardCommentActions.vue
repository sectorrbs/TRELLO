<template>
    <div class="comments__box-actions">
        <div class="comments__box-controls"
             :data-comment-id="comment_id"
             :class="{disabled}"
             @click="saveComment">
            Сохранить
        </div>
        <Fa :type="'r'"
            @click="cancelEditComment"
            :data-comment-id="comment_id"
            :name="'times comments__box-cancel tasks__item-cancel'"/>
        <div class="comments__box-options">
            <div class="comments__box-option" @click="openOptionWindow">
                <Fa :type="'r'"
                    :name="'paperclip icon comments__box-icon'"/>
                <CommentAttachment/>
            </div>
            <div class="comments__box-option" @click="openOptionWindow">
                <Fa :type="'r'"
                    :name="'at icon comments__box-icon'"/>
                <CommentAt/>
            </div>
            <div class="comments__box-option" @click="openEmojiWindow">
                <Fa :type="'r'"
                    :name="'smile icon comments__box-icon'"/>
                <CommentEmoji :emoji="emoji"/>
            </div>
            <div class="comments__box-option" @click="openOptionWindow">
                <Fa :type="'r'"
                    :name="'credit-card-front icon comments__box-icon'"/>
                <CommentCard/>
            </div>
        </div>
    </div>
</template>

<script>

import CommentAttachment from './Actions/CommentAttachment'
import CommentAt from './Actions/CommentAt'
import CommentEmoji from './Actions/CommentEmoji'
import CommentCard from './Actions/CommentCard'
import {commentMixin} from "../../../../../mixins/commentMixin";

export default {
    name: "CardCommentActions",
    data: () => ({
        emoji: false
    }),
    props: {
        disabled: {
            type: Boolean,
        },
        comment_id: {
            type: Number,
            default: null
        }
    },
    components: {CommentAttachment, CommentAt, CommentEmoji, CommentCard},
    methods: {
        openEmojiWindow() {
            this.emoji = true
        },
    },
    mixins: [commentMixin],
}
</script>

