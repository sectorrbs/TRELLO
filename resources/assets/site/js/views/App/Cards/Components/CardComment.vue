<template>
    <div class="details__window-action comments">
        <div class="details__window-action-title">
            <Fa :type="'d'"
                :name="'list-ul details__window-icon'"/>
            Действия
        </div>
        <div class="details__window-action-comment comments__wrapper">
            <div class="comments__content">
                <div class="details__window-participants-item comments__user">
                <span>
                    {{ getInitials(this.$store.getters.user?.name) }}
                </span>
                </div>
                <div class="comments__box">
                    <div class="details__window-action-btn comments__btn"
                         @click="showWindowNewComment">
                        Напишите комментарий...
                    </div>
                    <textarea class="comments__field"
                              @input="autoSize"
                              @focus="inFocus"
                              placeholder="Напишите комментарий..."></textarea>
                    <CardCommentActions :disabled="disabled"/>
                </div>
            </div>
            <CardCommentList v-if="comments.length" :comments="comments"/>
        </div>
    </div>
</template>

<script>

import CardCommentActions from './CommentsComponents/CardCommentActions'
import CardCommentList from './CommentsComponents/CardCommentList'
import {initialMixin} from "../../../../mixins/initialMixin";
import {commentMixin} from "../../../../mixins/commentMixin";

export default {
    name: "Comment",
    data: () => ({
        disabled: true,
    }),
    components: {CardCommentActions, CardCommentList},
    computed: {
        comments() {
            return this.$store.getters.cardInfo.comments
        }
    },
    mixins: [initialMixin, commentMixin],
}
</script>


