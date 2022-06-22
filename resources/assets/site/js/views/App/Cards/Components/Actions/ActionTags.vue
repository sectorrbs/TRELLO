<template>
    <div class="details__actions-btn tags" @click.stop="openModal">
        <Fa :type="'r'"
            :name="'tag details__actions-icon'"/>
        Метки
        <TagModals :pos="'right'" :showModal="show" />
    </div>
</template>

<script>

import {cardMixin} from "../../../../../mixins/cardMixin";
import {tagMixin} from "../../../../../mixins/tagMixin";
import TagModals from './components/TagModals'

export default {
    name: "ActionTags",
    mixins: [cardMixin, tagMixin],
    components: {TagModals},
}
</script>

