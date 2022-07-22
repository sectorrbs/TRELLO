export const commentMixin = {
    data: () => ({
        oldOffsetHeight: 0,
        oldScrollHeight: 0,
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
                        //this.getDefaultHeightCommentField()
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
        updateSize(e) {
            let parent = e.closest('.comments__item')
            let field = parent.querySelector('.comments__field')
            this.calculationUpdateSize(field)
        },
        calculationUpdateSize(el) {
            if (el.offsetHeight < el.scrollHeight) {
                let newHeight = el.scrollHeight + 2
                el.setAttribute('style', `height: ${newHeight}px; overflow: hidden`);
            }
        },
        calculationNewSize(el) {
            el.setAttribute('style', `height: ${el.scrollHeight}px; overflow: hidden`);
            el.style.height = (el.scrollHeight - 12) + 'px';
        },

        getDefaultHeightCommentField() {

            document.querySelectorAll('.comments__field').forEach(el => el.style.height = `30px`)
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
            if (!this.isCommentId(e)) this.clearNewCommentField(e)
        },
        isCommentId(e) {
            return e.target.dataset.commentId
        },
    },
}
