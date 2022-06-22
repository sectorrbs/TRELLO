<template>
    <div class="details__window-participants-subtitle">
        Метки
        <div class="details__window-tags" @click.prevent>
            <div class="details__window-tag" v-for="tag in tags" :key="tag.id" :style="{background: tag.color}">
                {{ tag.title }}
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
    components: {TagModals}
}
</script>
