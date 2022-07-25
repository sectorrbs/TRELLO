import {emojiList} from "../utils/emojiList";

export const commentMixin = {
    data: () => ({
        content: true
    }),
    mounted() {
        window.addEventListener('click', e => {
            if (!e.target.classList.contains('comments__field')
                || !e.target.classList.contains('comments__box-actions')
                || !e.target.classList.contains('comments__btn')
                || !e.target.classList.contains('details__window-action-btn')
                || !e.target.classList.contains('comments__box-icon')
                || !e.target.classList.contains('comments__box-option')) {
                document.querySelectorAll('.comments__box').forEach(el => {
                    if (!el.querySelector('.comments__field').value) {
                        el.classList.remove('active')
                        this.getDefaultHeightCommentField()
                    }
                    el.classList.remove('focus')
                })
            }
        })
    },
    methods: {
        autoSize(e) {
            this.isDisabled(e)
            this.calculationNewSize(e.target)
        },
        autoSizeFromInsertEmoji(field) {
            let box = field.closest('.comments__box')
            let btn = box.querySelector('.comments__box-controls')
            if (field.value) {
                btn.classList.remove('disabled')
            }
        },
        updateSize(e) {
            let parent = e.closest('.comments__item')
            let field = parent.querySelector('.comments__field')
            this.calculationUpdateSize(field)
        },
        calculationUpdateSize(el) {
            if (el.offsetHeight < el.scrollHeight) {
                let newHeight = el.scrollHeight - 12
                el.setAttribute('style', `height: ${newHeight}px; overflow: hidden`);
            }
        },
        calculationNewSize(el) {
            el.setAttribute('style', `height: ${el.scrollHeight}px; overflow: hidden`);
            el.style.height = (el.scrollHeight - 12) + 'px';
        },

        getDefaultHeightCommentField() {
            document.querySelector('.comments__field').style.height = `30px`
        },
        getHeightField40px(field) {
            field.style.height = `40px`
        },
        isDisabled(e) {
            this.disabled = e.target.value.trim() === '';
        },
        getCurrentCommentField(e) {
            let box = e.target.closest('.comments__box')
            return box.querySelector('.comments__field')
        },
        clearNewCommentField(e) {
            e.target.closest('.comments__box').classList.remove('focus', 'active')
        },
        showWindowNewComment(e) {
            let box = e.target.closest('.comments__box')
            let field = box.querySelector('.comments__field')
            this.getHeightField40px(field)
            box.classList.add('active', 'focus')
            this.disabled = true
            field.value = ''
            field.focus()
        },
        inFocus(e) {
            let box = e.target.closest('.comments__box')
            box.classList.add('focus')
        },
        saveComment(e) {
            let box = e.target.closest('.comments__box')
            let text = box.querySelector('.comments__field').value
            let params = {
                comment_id: e.target.dataset.commentId || null,
                user_id: this.$store.getters.user.id,
                card_id: this.$store.getters.cardInfo.id,
                text
            }
            box.classList.remove('active')
            box.classList.remove('focus')
            text = ''
            this.closingCommentFields(e)
            this.getDefaultHeightCommentField()
            this.$store.dispatch('createOrUpdateCardComment', params)
        },
        closingCommentFields(e) {

            if (this.isCommentId) {
                document.querySelectorAll('.comments__item-wrapper')
                    .forEach(el => el.classList.remove('focus', 'active'))
            }
        },
        cancelEditComment(e) {
            this.getDefaultHeightCommentField()
            this.closingCommentFields(e)
            !this.isCommentId(e)
                ? this.clearNewCommentField(e)
                : this.setCommentFieldOldText(e)
        },
        isCommentId(e) {
            return e.target.dataset.commentId
        },
        setOldCommentText(e) {
            let box = e.target.closest('.comments__item-wrapper')
            this.$store.dispatch('getOldComment', box.querySelector('.comments__field').value)
        },
        setCommentFieldOldText(e) {
            let box = e.target.closest('.comments__item-wrapper')
            let text = box.querySelector('.comments__item-text span')
            let field = box.querySelector('.comments__field')
            field.value = this.$store.getters.oldComment
            text.innerHTML = this.reformatText(this.$store.getters.oldComment)
        },
        reformatText(text) {
            let tag = /\n/gi;
            return text.replace(tag, '<br/>');
        },
        searchImage(text) {
            let regex = /:\w*(\-)*\w*:/gi;
            const founds = text.match(regex);
            if (founds) {
                founds.forEach(el => {
                    let changeEl = el.replaceAll(':', '')
                    let elem = emojiList.find(el => {
                        let currentEmoji = el.n[1] || el.n[0]
                        return currentEmoji === changeEl
                    }).u
                    let block = `<img src="/storage/emoji/${elem}.png" class="comments__emoji" alt="${changeEl}">`
                    text = text.replace(el, block)
                })
            }
            return text;
        }
    },
    computed: {
        text() {
            this.a = this.comment.text
            let tag = /\n/gi;
            let str = this.searchImage(this.comment.text);
            return str.replace(tag, '<br/>');
        }
    },
}
