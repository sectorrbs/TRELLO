<template>
    <div class="comments__box-actions">
        <div class="comments__box-controls"
             :class="{disabled}"
             @click="saveComment">
            Сохранить
        </div>
        <div class="comments__box-options">
            <div class="comments__box-option" @click="openWindow">
                <Fa :type="'r'"
                    :name="'paperclip icon'"/>
                <CommentAttachment/>
            </div>
            <div class="comments__box-option" @click="openWindow">
                <Fa :type="'r'"
                    :name="'at icon'"/>
                <CommentAt/>
            </div>
            <div class="comments__box-option" @click="openWindow">
                <Fa :type="'r'"
                    :name="'smile icon'"/>
                <CommentEmoji/>
            </div>
            <div class="comments__box-option" @click="openWindow">
                <Fa :type="'r'"
                    :name="'credit-card-front icon'"/>
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

export default {
    name: "CardCommentActions",
    props: ['disabled'],
    components: {CommentAttachment, CommentAt, CommentEmoji, CommentCard},
    methods: {
        openWindow(e) {
            console.log(121211)
            let box = e.target.closest('.comments__box')
            box.classList.add('focus')
            box.classList.add('active')
            box.querySelector('.comments__field').focus()
        },
        saveComment(e) {
            let box = e.target.closest('.comments__box')
            let text = box.querySelector('.comments__field').value
            let params = {
                user_id: this.$store.getters.user.id,
                card_id: this.$store.getters.cardInfo.id,
                text
            }
            box.classList.remove('active')
            text = ''
            this.$store.dispatch('createCardComment', params)
        }
    }
}
</script>

