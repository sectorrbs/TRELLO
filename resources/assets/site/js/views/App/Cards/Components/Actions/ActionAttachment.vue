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
                        <img v-if="readyToUpload" class="films__view-img" :src="formData.fileData" alt="img">
                    </div>
                    <div class="attachment__link">
                        <div class="details__actions-modal-subtitle">
                            Введите ссылку
                        </div>
                        <input type="text" class="details__actions-modal-input attachment__input"
                               placeholder="Ввести любую ссылку...">
                        <button class="attachment__btn details__actions-btn">Прикрепить</button>
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
                link: null
            })
            this.img = file
        },
    },
    computed: {
        readyToUpload() {
            return this.formData.fileName && this.formData.fileData
        }
    }
}
</script>
