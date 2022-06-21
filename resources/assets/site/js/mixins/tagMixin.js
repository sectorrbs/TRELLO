export const tagMixin = {
    data: () => ({
        show: false,
        show_second: false,
        disabled: true,
        tag: null,
        newTagName: null,
        oldTagName: null,
    }),
    methods: {
        openModal(e) {
            this.$store.dispatch('getDeskTags', this.$store.getters.desk.id)
            this.actionModal(e)
        },
        openWindowEditTag(deskTag, pos) {
            this.tag = deskTag
            this.newTagName = this.oldTagName = deskTag.title

            this.getParent(pos)
                .querySelector('[data-first-modal]').classList.remove('show')
            this.getParent(pos)
                .querySelector('[data-second-modal]').classList.add('show')

            setTimeout(() => {
                this.$refs.detailsInput.focus()
            }, 0)

        },
        closeWindowEditTag(e) {
            this.firstModal.classList.remove('show')
            this.secondModal.classList.remove('show')
        },
        backModalFirst(pos) {
            this.getParent(pos)
                .querySelector('[data-first-modal]').classList.add('show')
            this.getParent(pos)
                .querySelector('[data-second-modal]').classList.remove('show')
        },
        editName() {
            this.disabled = this.newTagName === this.oldTagName;
        },
        updateTagName(tag, pos) {
            this.$store.dispatch('updateDeskTags', {
                id: tag.id,
                id_desk: tag.id_desk,
                title: this.newTagName,
                id_card: this.$store.getters.cardInfo.id
            })
            let tagWrappers = document.querySelectorAll(`[data-id="${tag.id}"]`)
            tagWrappers.forEach(tagWrapper => tagWrapper.textContent = this.newTagName)
            this.backModalFirst(pos)
        },
        addTag(e, tag) {
            let params = {id_desk_tag: tag.id, id_card: this.$store.getters.cardInfo.id}
            if (e.target.classList.contains('active')) {
                this.$store.dispatch('deleteTagToCard', params)
            } else {
                this.$store.dispatch('addTagToCard', params)
            }
        },
        getParent(pos) {
            if (pos === 'right') {
                return document.querySelector('.tags')
            } else {
                return document.querySelector('.details__window-tags')
            }
        },
        isActiveTag(id) {
            return this.cardTags.find(el => +id === +el.id)
        }
    },
    computed: {
        deskTags() {
            return this.$store.getters.deskTags
        },
        cardTags() {
            return this.$store.getters.cardInfo.tags
        },
        firstModal() {
            return document.querySelector('[data-first-modal]')
        },
        secondModal() {
            return document.querySelector('[data-second-modal]')
        }
    }
}
