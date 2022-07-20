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
                    {{ getInitials(this.$store.getters.user.name) }}
                </span>
                </div>
                <div class="comments__box">
                    <div class="details__window-action-btn comments__btn"
                         @click="showWindowComment">
                        Напишите комментарий...
                    </div>
                    <textarea class="comments__field"
                              @input="autoSize"
                              @blur="removeFocus"
                              @focus="addFocus"
                              data-autosize="true"
                              placeholder="Напишите комментарий..."></textarea>
                    <CardCommentActions :disabled="disabled"/>
                </div>
            </div>
            <CardCommentList v-if="comments.length" :comments="comments"/>
        </div>
    </div>
</template>

<script>

import {initialMixin} from "../../../../mixins/initialMixin";
import CardCommentActions from './CommentsComponents/CardCommentActions'
import CardCommentList from './CommentsComponents/CardCommentList'

export default {
    name: "Comment",
    data: () => ({
        disabled: true
    }),
    mixins: [initialMixin],
    components: {CardCommentActions, CardCommentList},
    methods: {
        showWindowComment(e) {
            let box = e.target.closest('.comments__box')
            let field = box.querySelector('.comments__field')
            box.classList.add('active')
            field.value = ''
            field.focus()
        },
        autoSize(e) {
            this.isDisabled(e)
            if (e.target.offsetHeight < e.target.scrollHeight) {
                let newHeight = e.target.scrollHeight + 2
                e.target.style.height = newHeight + 'px'
            }
        },
        isDisabled(e) {
            this.disabled = e.target.value === '';
        },
        removeFocus() {
            document.querySelectorAll('.comments__field').forEach(el => {
                let box = el.closest('.comments__box')
                if (el.value) {
                    box.classList.remove('focus')
                } else {
                    box.classList.remove('active')
                    box.classList.remove('focus')
                }
            })
        },
        addFocus(e) {
            e.target.closest('.comments__box').classList.add('focus')
        }
    },
    computed: {
        comments() {
            return this.$store.getters.cardInfo.comments
        }
    }
}
</script>


