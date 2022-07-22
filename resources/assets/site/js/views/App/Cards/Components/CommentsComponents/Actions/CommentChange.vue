<template>
    <div class="comments__item-action" @click="openEdit">
        Изменить
    </div>
</template>

<script>
export default {
    name: "CommentChange",
    props: ['comment'],
    methods: {
        openEdit(e) {
            document.querySelectorAll('.comments__item-wrapper')
                .forEach(el => el.classList.remove('focus', 'active'))
            let wrapper = e.target.closest('.comments__item-wrapper')
            wrapper.classList.add('focus', 'active')
            this.$emit('disabled')
            this.$emit('updateSize', e.target)
            setTimeout(() => {
                wrapper.querySelector('.comments__field').focus()
            }, 0)
        }
    }
}
</script>

