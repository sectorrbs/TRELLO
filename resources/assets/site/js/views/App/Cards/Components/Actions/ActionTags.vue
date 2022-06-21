<template>
    <div class="details__actions-btn tags" @click.stop="openModal">
        <Fa :type="'r'"
            :name="'tag details__actions-icon'"/>
        Метки
        <ActionModal :show="show">
            <template v-slot:modal_title>
                Метки
            </template>
            <template v-slot:modal_content>
                <div class="details__actions-tags" v-if="deskTags">
                    <div class="details__actions-tag tag" v-for="deskTag in deskTags" :key="deskTag.id">
                        <div class="tag__wrapper"
                             :id="deskTag.id"
                             :class="[deskTag.style]"
                             @click="addTag(deskTag)"
                             :style="{background: deskTag.color}">
                            <span>
                            {{ deskTag.title }}
                            </span>
                        </div>
                        <div class="tag__edit" @click.stop="openWindowEditTag(deskTag)">
                            <Fa :type="'r'"
                                :name="'pen tag__edit-icon'"/>
                        </div>
                    </div>
                </div>
            </template>
        </ActionModal>
        <div class="details__actions-modal" ref="cardModalSecond">
            <div class="details__actions-modal-top" v-if="tag">
                <div class="details__actions-modal-back">
                    <Fa :type="'r'"
                        @click="backModalFirst"
                        :name="'chevron-left tag__edit-icon'"/>
                </div>
                <div class="details__actions-modal-title">
                    Метка
                    <div class="details__actions-modal-label" :style="{background: tag.color}"></div>
                </div>
                <div class="details__actions-modal-close" @click.stop="closeWindowEditTag">
                    <Fa :type="'l'"
                        :name="'times'"/>
                </div>
            </div>
            <div class="details__actions-edit" v-if="tag">
                <input type="text"
                       ref="detailsInput"
                       class="form-input details__actions-input"
                       @input="editName"
                       v-model="newTagName" placeholder="Введите название метки">
                <button class="btn-date details__actions-btn"
                        @click="updateTagName(tag)"
                        :class="{disabled}">
                    Обновить
                </button>
            </div>
        </div>
    </div>
</template>

<script>

import {cardMixin} from "../../../../../mixins/cardMixin";

export default {
    name: "ActionTags",
    data: () => ({
        show: false,
        show_second: false,
        disabled: true,
        tag: null,
        newTagName: null,
        oldTagName: null,
    }),
    mixins: [cardMixin],
    methods: {
        openModal(e) {
            this.$store.dispatch('getDeskTags', this.$store.getters.desk.id)
            this.actionModal(e)
        },
        openWindowEditTag(deskTag) {
            this.tag = deskTag
            this.newTagName = this.oldTagName = deskTag.title
            this.show = false
            this.$refs.cardModalSecond.classList.add('show')
            setTimeout(() => {
                this.$refs.detailsInput.focus()
            }, 0)

        },
        closeWindowEditTag(e) {
            this.show = false
            this.$refs.cardModalSecond.classList.remove('show')
        },
        backModalFirst() {
            this.show = true
            this.$refs.cardModalSecond.classList.remove('show')
        },
        editName() {
            this.disabled = this.newTagName === this.oldTagName;
        },
        updateTagName(tag) {
            this.$store.dispatch('updateDeskTags', {id: tag.id, id_desk: tag.id_desk, title: this.newTagName})
            let tagWrapper = document.getElementById(tag.id)
            tagWrapper.textContent = this.newTagName
            this.backModalFirst()
        },
        addTag(tag) {
            this.$store.dispatch('addTagToCard', {id_desk_tag: tag.id, id_card: this.$store.getters.cardInfo.id})
        }
    },
    computed: {
        deskTags() {
            return this.$store.getters.deskTags
        },
    }
}
</script>

