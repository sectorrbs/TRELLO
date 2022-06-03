<template>
    <div class="details__actions">
        <div class="details__actions-subtitle">
            Добавить на карточку
        </div>
        <div class="details__actions-btns">
            <ActionParticipants/>
            <ActionTags/>
            <ActionCheckList :cardInfo="cardInfo"/>
            <ActionDate/>
            <ActionAttachment/>
            <ActionCover/>
            <ActionDelete :cardInfo="cardInfo"/>
        </div>
    </div>
</template>

<script>

import ActionCover from './Actions/ActionCover'
import ActionDelete from './Actions/ActionDelete'
import ActionAttachment from './Actions/ActionAttachment'
import ActionDate from './Actions/ActionDate'
import ActionCheckList from './Actions/ActionCheckList'
import ActionTags from './Actions/ActionTags'
import ActionParticipants from './Actions/ActionParticipants'

export default {
    name: "CardActions",
    components: {
        ActionCover,
        ActionDelete,
        ActionAttachment,
        ActionDate,
        ActionCheckList,
        ActionTags,
        ActionParticipants
    },
    props:['cardInfo'],
}
</script>

<style scoped>

</style>
