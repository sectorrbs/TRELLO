<template>
    <div :class="{hidden: !attachments.length}" class="desks__cards-term">
        <Fa :type="'r'"
            :name="'paperclip icon'"/>
        <span>{{ attachments.length }}</span>
    </div>
</template>

<script>
export default {
    name: "CardMiniAttachments",
    props: ['attachments']
}
</script>
