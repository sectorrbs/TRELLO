<template>
    <div v-if="emoji" class="comments__box-window emoji">
        <EmojiPicker :native="false" @select="onSelectEmoji"/>
    </div>
</template>

<script>

import EmojiPicker from 'vue3-emoji-picker'
import '../../../../../../../../../../node_modules/vue3-emoji-picker/dist/style.css'
import {emojiList} from '../../../../../../utils/emojiList'
import {commentMixin} from "../../../../../../mixins/commentMixin";

export default {
    name: "CommentEmoji",
    components: {EmojiPicker},
    props: ['emoji', 'field'],
    mounted() {
        window.addEventListener('click', e => {
            console.log(e.target)
            if (!e.target.classList.contains('comments__box-emoji') ||
                !e.target.classList.contains('comments__box-option')
            ) {
                this.$emit('closeEmojiWindow')
            }
        })
    },
    methods: {
        onSelectEmoji(emoji) {
            console.log(emoji)
            let selectedEmoji = emoji.n[1] || emoji.n[0]
            this.searchEmoji(selectedEmoji)
        },
        searchEmoji(emoji) {
            let elem = emojiList.find(el => {
                let currentEmoji = el.n[1] || el.n[0]
                return currentEmoji === emoji
            })
            let emojiTag = `:${elem.n[1] || elem.n[0]}:`
            this.field.value += ` ${emojiTag}`
            this.autoSizeFromInsertEmoji(this.field)
        }
    },
    mixins: [commentMixin],
    computed: {
        isOpenEmojiWindow() {
            return this.$store.getters.isOpenEmojiWindow
        }
    }
}
</script>

