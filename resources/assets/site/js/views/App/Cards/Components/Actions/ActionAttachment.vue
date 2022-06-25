<template>
    <div class="details__actions-btn attachment" @click.stop="show=!show">
        <Fa :type="'r'"
            :name="'paperclip details__actions-icon'"/>
        Вложение
        <ActionModal @click.stop :show="show">
            <template v-slot:modal_title>
                Прикрепить...
            </template>
            <template v-slot:modal_content>
                <div class="details__actions-attachment">
                    <div class="attachment__items">
                        <div class="attachment__item" @click="uploadImg">
                            <span>
                            С компьютера
                            </span>
                            <input type="file"
                                   @change="onFileChange"
                                   ref="upload"
                                   style="display:none">
                        </div>
                    </div>
                    <div class="attachment__link">
                        <div class="details__actions-modal-subtitle">
                            Введите ссылку
                        </div>
                        <input type="text"
                               @input="changeLinkName"
                               v-model="link"
                               class="details__actions-modal-input attachment__input"
                               placeholder="Ввести любую ссылку...">
                        <button @click="addLink"
                                :class="{disabled}"
                                class="attachment__btn details__actions-btn">
                            Прикрепить ссылку
                        </button>
                    </div>
                </div>
            </template>
        </ActionModal>
    </div>
</template>

<script>
export default {
    name: "ActionAttachment",
    data: () => ({
        show: false,
        disabled: true,
        link: null,
        img: null,
        formData: {
            fileName: null,
            fileData: null,
            file: null
        }
    }),
    props: ['cardInfo'],
    methods: {
        uploadImg() {
            this.$refs.upload.click()
        },
        onFileChange(e) {
            let file = this.formData.file = e.target.files[0]
            this.formData.fileName = e.target.files[0].name

            let reader = new FileReader()
            reader.onload = e => {
                this.formData.fileData = e.target.result
            }
            reader.readAsDataURL(file)
            this.$store.dispatch('addCardAttachmentImage', {
                card_id: this.$store.getters.cardInfo.id,
                type: 'image',
                image: file,
                image_name: file.name,
                desk_id: this.$store.getters.desk.id,
            })
            this.img = file
        },
        changeLinkName(e) {
            this.disabled = !e.target.value;
        },
        addLink() {
            this.$store.dispatch('addCardAttachmentLink', {
                card_id: this.$store.getters.cardInfo.id,
                type: 'link',
                link: this.link,
                desk_id: this.$store.getters.desk.id,
            })
        }
    },
}
</script>
