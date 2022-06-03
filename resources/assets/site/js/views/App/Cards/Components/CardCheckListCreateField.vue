<template>
    <div class="details__window-checklist-create">
        <textarea type="text" class="details__window-checklist-input" placeholder="Добавить элемент"></textarea>
        <div class="details__window-checklist-btns">
            <ActionCardBtn class="blue">
                Добавить
            </ActionCardBtn>
            <ActionCardBtn class="transparent">
                Отмена
            </ActionCardBtn>
        </div>
    </div>
</template>

<script>

import ActionCardBtn from './Actions/ActionСardBtn'

export default {
    name: "CardCheckListCreateField",
    components: {ActionCardBtn},
}
</script>
