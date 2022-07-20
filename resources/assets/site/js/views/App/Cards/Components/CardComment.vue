<template>
    <div class="details__window-action comments">
        <div class="details__window-action-title">
            <Fa :type="'d'"
                :name="'list-ul details__window-icon'"/>
            Действия
        </div>
        <div class="details__window-action-comment comments__item">
            <div class="details__window-participants-item">
                <span>
                    {{ getInitials(this.$store.getters.user.name) }}
                </span>
            </div>
            <div class="comments__inner">
                <div class="details__window-action-btn comments__btn" @click="showWindowComment">
                    Напишите комментарий...
                </div>
                <textarea class="comments__field" placeholder="Напишите комментарий..."></textarea>
            </div>
        </div>
    </div>
</template>

<script>

import {initialMixin} from "../../../../mixins/initialMixin";

export default {
    name: "Comment",
    mixins: [initialMixin],
    methods: {
        showWindowComment() {

        }
    }
}
</script>


