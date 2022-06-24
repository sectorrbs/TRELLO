<template>
    <div class="details__window-attachment">
        <div class="details__window-description-title">
            <Fa :type="'r'"
                :name="'paperclip details__window-icon'"/>
            Вложения
        </div>
        <div class="attachment__sections">
            <div class="attachment__section" v-for="attachment in attachments" :key="attachment.id">
                <div class="attachment__section-left">
                    <img v-if="attachment.image"
                         class="attachment__section-img"
                         :src="'/storage/cards_images/thumb/'+ attachment.image"
                         :alt="attachment.image">
                </div>
                <div class="attachment__section-right">
                    <div class="attachment__section-title">
                        {{ attachment.image }}
                    </div>
                    <div class="attachment__section-date">
                        Добавлено вчера в 23:32
                    </div>
                    <div class="attachment__section-actions">
                        <a href="" class="attachment__section-link">Комментарий</a>
                        <a href="" class="attachment__section-link">Удалить</a>
                        <a href="" class="attachment__section-link">Изменить</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardAttachments",
    props: ['attachments'],
}
</script>
