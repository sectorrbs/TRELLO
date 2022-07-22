<template>
    <div v-if="emoji" class="comments__box-window emoji">
        <EmojiPicker :native="false" @select="onSelectEmoji"/>
    </div>
</template>

<script>

import EmojiPicker from 'vue3-emoji-picker'
import '../../../../../../../../../../node_modules/vue3-emoji-picker/dist/style.css'

export default {
    name: "CommentEmoji",
    components: {EmojiPicker},
    props: ['emoji'],
    methods: {
        onSelectEmoji(emoji) {
            console.log(emoji)
        },
    }
}
</script>

