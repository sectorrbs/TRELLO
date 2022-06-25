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
            this.$store.dispatch('getDeskTags', {id_desk: this.$store.getters.desk.id})
            this.actionModal(e)
        },
        openWindowEditTag(deskTag, pos) {
            this.disabled = true
            this.tag = deskTag
            this.newTagName = this.oldTagName = document.querySelector(`[data-id="${deskTag.id}"] span`).textContent.trim()
            this.getParent(pos)
                .querySelector('[data-first-modal]').classList.remove('show')
            this.getParent(pos)
                .querySelector('[data-second-modal]').classList.add('show')

            setTimeout(() => {
                this.$refs.detailsInput.focus()
            }, 0)

        },
        closeWindowEditTag(e) {
            document.querySelectorAll('.details__actions-modal')
                .forEach(el => el.classList.remove('show'))
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

            let visibleTag = document.querySelector(`[data-tag-id="${tag.id}"]`),
                tagWrappers = document.querySelectorAll(`[data-id="${tag.id}"] span`)

            if (visibleTag) {
                visibleTag.textContent = this.newTagName
            }

            tagWrappers.forEach(tagWrapper => tagWrapper.textContent = this.newTagName)
            this.$store.dispatch('getDeskNotLoader', tag.id_desk)
            this.backModalFirst(pos)
        },
        updateTags(e, tag) {
            e.target.classList.contains('active')
                ? this.deleteTag(e, tag)
                : this.addTag(e, tag)
            this.$store.dispatch('getDeskNotLoader', tag.id_desk)
        },
        deleteTag(e, tag) {
            let params = {id_desk_tag: tag.id, id_card: this.$store.getters.cardInfo.id}
            document.querySelector(`[data-tag-id="${tag.id}"]`).remove()
            document.querySelectorAll(`[data-id="${tag.id}"]`).forEach(el => {
                el.classList.remove('active')
                el.querySelector('.tag__wrapper-check').style.display = 'none'
            })
            this.$store.dispatch('deleteTagToCard', params)
            if (!document.querySelectorAll('[data-tag-id]').length) {
                document.querySelector('.details__window-participants-subtitle').style.display = 'none'
            }
        },
        addTag(e, tag) {
            let params = {id_desk_tag: tag.id, id_card: this.$store.getters.cardInfo.id}
            document.querySelector('.details__window-participants-subtitle').style.display = 'block'
            if (document.querySelector('.details__window-tag')) {
                let wrap = document.querySelector('.details__window-wrapper')
                let html = `<div class="details__window-tag" data-tag-id="${tag.id}" style="background: ${tag.color};">${tag.title || ''}</div>`
                wrap.insertAdjacentHTML('beforeend', html)
                document.querySelectorAll(`[data-id="${tag.id}"]`).forEach(el => {
                    el.classList.add('active')
                    el.querySelector('.tag__wrapper-check').style.display = 'flex'
                })
                this.$store.dispatch('addTagToCard', params)
            } else {
                this.$store.dispatch('addTagToCard', params)
                tag.id = this.$store.getters.cardInfo.id
                this.$store.dispatch('getCardInfoNotLoader', tag)
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
            return document.querySelector(`[data-tag-id="${id}"]`)
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
