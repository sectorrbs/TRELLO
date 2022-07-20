<template>
    <div class="comments__items">
        <div class="comments__item"
             v-for="comment in comments"
             :key="comment.id">
            <div class="comments__item-logo">
                <span>
                    {{ getInitials(this.$store.getters.user.name) }}
                </span>
            </div>
            <div class="comments__item-box">
                <div class="comments__item-name">
                    {{ this.$store.getters.user.name }}
                    <div class="comments__item-date">
                        {{ comment.created_at }}
                    </div>
                </div>
                <div class="comments__item-text">
                    {{ comment.text }}
                </div>
                <div class="comments__item-actions">
                    <div class="comments__item-action">
                        Изменить
                    </div>
                    <div class="comments__item-action">
                        Удалить
<!--                        <ActionModal :show="show">-->
<!--                            <template v-slot:modal_title>-->
<!--                                Удалить карточку-->
<!--                            </template>-->
<!--                            <template v-slot:modal_content>-->
<!--                                <div class="details__actions-modal-text">-->
<!--                                    Все действия будут удалены из ленты, и вы не сможете повторно открыть карточку.-->
<!--                                    Отмена невозможна.-->
<!--                                </div>-->
<!--                                <div class="details__actions-modal-btn delete" @click="cardDelete">-->
<!--                                    Удалить-->
<!--                                </div>-->
<!--                            </template>-->
<!--                        </ActionModal>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {initialMixin} from "../../../../../mixins/initialMixin";

export default {
    name: "CardCommentList",
    props: ['comments'],
    mixins: [initialMixin],
}
</script>
