<template>
    <div v-if="cardInfo" class="details__window" ref="cardInfo">
        <div v-if="cover" class="details__window-cover">
            <photo-provider>
                <photo-consumer :intro="cover.image_name"
                                :key="cover.image"
                                :src="'/storage/cards_images/'+ cover.image">
                    <img :src="'/storage/cards_images/thumb_700_250/'+ cover.image"
                         class="attachment__section-img view-box">
                </photo-consumer>
            </photo-provider>
        </div>
        <div v-if="cardInfo.id_backgrounds_cards" class="details__window-bg">
            <img :src="`/storage/backgrounds_cards/thumb_380_380/${getCardBg(cardInfo.id_backgrounds_cards)}`" alt="">
        </div>
        <div class="details__window-top">
            <div class="details__window-content">
                <div class="details__window-inner">
                    <div class="details__window-title" @click="renameCardShowField">
                        <Fa :type="'r'"
                            :name="'desktop-alt details__window-icon'"/>
                        {{ cardInfo.name }}
                    </div>
                    <CardRenameField @hideField="renameCheckListHideField"
                                     :oldName="cardInfo.name"
                                     :card="cardInfo"/>
                </div>
                <div class="details__window-subtitle">
                    В колонке
                    <div class="details__window-card">
                        {{ cardInfo.deskList.name }}
                    </div>
                </div>
            </div>
        </div>
        <div class="details__window-bottom">
            <div class="details__window-bottom-left">
                <CardTags v-if="cardInfo.tags.length" :tags="tags"/>
                <CardTerms v-if="cardInfo.term" :card="cardInfo"/>
                <CardParticipants v-if="cardInfo.participants.length" :parties="cardInfo.participants"/>
                <CardDescription :card="cardInfo"/>
                <CardAttachmentsLoading v-if="attachmentLoad"/>
                <CardAttachments v-if="cardInfo.attachments.length" :attachments="cardInfo.attachments"/>
                <CheckLists v-if="cardInfo.checkLists.length" :checkLists="cardInfo.checkLists"/>
                <CardComment/>
            </div>
            <div class="details__window-bottom-right">
                <CardActions :cardInfo="cardInfo"/>
            </div>
        </div>
    </div>
</template>

<script>


import {mapGetters} from 'vuex'
import CardParticipants from './Components/CardParticipants'
import CardRenameField from './Components/CardRenameField'
import CardDescription from './Components/CardDescription'
import CardComment from './Components/CardComment'
import CardAttachments from './Components/CardAttachments'
import CardAttachmentsLoading from './Components/AttachmentsComponents/CardAttachmentsLoading'
import CardActions from './Components/CardActions'
import CardTerms from './Components/CardTerms'
import CardTags from './Components/CardTags'
import CheckLists from '../CheckLists/Index'

export default {
    name: "CardInfo",
    props: ['cardInfo'],
    mounted() {
        this.getCardId()
        setTimeout(() => {
            window.addEventListener('click', (e) => {
                if (!e.target.classList.contains('details__window-checklist-input') &&
                    !e.target.classList.contains('card-create-field')) {
                    this.field = false
                }
            })
        }, 100)
    },
    methods: {
        getCardId() {
            if (this.cardInfo) {
                this.$store.dispatch('getCardId', this.cardInfo.id)
            }
        },
        renameCheckListHideField() {
            this.$closed()
        },
        renameCardShowField() {
            this.$closed()
            let input = this.$refs.cardInfo.querySelector('.details__window-card-rename')
            let form = this.$refs.cardInfo.querySelector('.details__window-card-form')
            form.classList.add('show')
            input.focus()
        },
        getCardBg(id) {
            let bgs = this.$store.getters.backgrounds_cards
            if (bgs) {
                let bg = bgs.find(el => +el.id === +id)
                return bg.image
            }
        },
    },
    components: {
        CardParticipants,
        CardDescription,
        CardComment,
        CardActions,
        CheckLists,
        CardRenameField,
        CardTerms,
        CardTags,
        CardAttachments,
        CardAttachmentsLoading
    },
    computed: {
        ...mapGetters(['modalLoad', 'attachmentLoad', 'cardParty']),
        cover() {
            let attachment = this.cardInfo.attachments || 0
            if (attachment) {
                return attachment.find(el => el.type === 'image' && el.cover)
            }
            return 0
        },
        tags() {
            return this.cardInfo.tags
        }
    }
}
</script>

