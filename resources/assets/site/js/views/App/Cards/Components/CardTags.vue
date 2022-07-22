<template>
    <div class="details__window-participants-subtitle">
        Метки
        <div class="details__window-tags" @click.prevent>
            <div v-if="tags" class="details__window-wrapper">
                <div class="details__window-tag"
                     v-for="tag in tags"
                     :key="tag.id"
                     :data-tag-id="tag.id"
                     :style="{background: tag.color}">
                    {{ tag.title }}
                </div>
            </div>
            <div class="details__window-tag tag--edit"
                 @click.stop="openModal">
                <Fa :type="'r'"
                    :name="'pen tag--edit-icon'"/>
            </div>
            <TagModals :pos="'center'" :showModal="show"/>
        </div>
    </div>
</template>

<script>

import {cardMixin} from "../../../../mixins/cardMixin";
import {tagMixin} from "../../../../mixins/tagMixin";
import TagModals from "./Actions/components/TagModals";

export default {
    name: "CardTags",
    props: ['tags'],
    mixins: [cardMixin, tagMixin],
    components: {TagModals},
    watch: {
        tags(n, o) {
            document.querySelector('.details__window-wrapper').remove()

            let parent = document.querySelector('.tag--edit')
            parent.insertAdjacentHTML("beforebegin", '<div class="details__window-wrapper"></div>');

            let box = document.querySelector('.details__window-wrapper')

            this.tags.forEach(el => {
                let html =
                    `
                     <div class="details__window-tag"
                      data-tag-id="${el.id}"
                     style="background: ${el.color}">
                    ${el.title || ''}
                    </div>
                    `
                box.insertAdjacentHTML('beforeend', html)
            })
        }
    }
}
</script>
