<template>
    <ActionModal data-first-modal :show="showModal">
        <template v-slot:modal_title>
            Метки
        </template>
        <template v-slot:modal_content>
            <div class="details__actions-tags" v-if="deskTags">
                <div class="details__actions-tag tag" v-for="deskTag in deskTags" :key="deskTag.id">
                    <div class="tag__wrapper"
                         :data-id="deskTag.id"
                         :class="[deskTag.style, isActiveTag(deskTag.id) ? 'active' :'']"
                         @click.stop.prevent="updateTags($event,deskTag)"
                         :style="{background: deskTag.color}">
                            <span @click.stop>
                            {{ deskTag.title }}
                            </span>
                        <div :style="[isActiveTag(deskTag.id) ? '' : 'display: none']" class="tag__wrapper-check">
                            <Fa :type="'r'"
                                :name="'check tag__wrapper-check-icon'"/>
                        </div>
                    </div>
                    <div class="tag__edit" @click.stop="openWindowEditTag(deskTag, pos)">
                        <Fa :type="'r'"
                            :name="'pen tag__edit-icon'"/>
                    </div>
                </div>
            </div>
        </template>
    </ActionModal>
    <div class="details__actions-modal" data-second-modal>
        <div class="details__actions-modal-top" v-if="tag">
            <div class="details__actions-modal-back">
                <Fa :type="'r'"
                    @click.stop="backModalFirst(pos)"
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
                    @click.stop="updateTagName(tag,pos)"
                    :class="{disabled}">
                Обновить
            </button>
        </div>
    </div>
</template>

<script>

import {tagMixin} from "../../../../../../mixins/tagMixin";
import {cardMixin} from "../../../../../../mixins/cardMixin";

export default {
    name: "TagModals",
    props: ['showModal', 'pos'],
    mixins: [tagMixin, cardMixin]
}
</script>
