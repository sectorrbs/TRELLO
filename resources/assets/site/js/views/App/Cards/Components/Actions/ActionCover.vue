<template>
    <div class="details__actions-btn cover" @click.stop="loadCovers">
        <Fa :type="'r'"
            :name="'blanket details__actions-icon'"/>
        Обложка
        <ActionModal :show="show">
            <template v-slot:modal_title>
                Обложка
            </template>
            <template v-slot:modal_content>
                <slot></slot>
                <swiper :modules="modules"
                        :space-between="5"
                        :slides-per-view="5"
                        :slides-per-group="5"
                        :navigation="true">
                    <swiper-slide v-for="background in backgrounds"
                                  :key="background.id"
                                  :id="background.id"
                                  @click="bgSelection($event,background.id)"
                                  :class="[background.id === card.id_backgrounds_cards ? 'select' : '']"
                                  :style="
                          {
                              background: background.image
                              ? `url('/storage/backgrounds_cards/thumb_55_40/${background.image}')`
                              : background.color
                          }"/>
                </swiper>
                <div class="attachment__btn details__actions-btn"
                     @click="updateBackgroundCard"
                     :class="{disabled}">
                    Сменить обложку
                </div>
            </template>
        </ActionModal>
    </div>
</template>

<script>

import {Pagination, Navigation} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default {
    name: "ActionCover",
    data: () => ({
        show: false,
        disabled: true,
        idBg: null
    }),
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        return {
            modules: [Pagination, Navigation]
        }
    },
    methods: {
        loadCovers() {
            this.$store.dispatch('getBackgroundsCards')
            this.show = !this.show
        },
        bgSelection(e, id) {
            if (e.currentTarget.classList.contains('select')) {
                e.currentTarget.classList.remove('select')
                this.bgId
                    ? this.changeBgId(this.bgId)
                    : this.changeBgId(1)
            } else {
                document.querySelectorAll('.swiper-slide').forEach(el => {
                    el.classList.remove('select')
                })
                e.currentTarget.classList.add('select')
                this.changeBgId(id)
            }
        },
        changeBgId(id) {
            if (id !== this.card.id_backgrounds_cards) {
                this.disabled = false
                this.idBg = id
            } else {
                this.disabled = true
            }
        },
        updateBackgroundCard() {
            this.card.id_backgrounds_cards = this.idBg
            this.$store.dispatch('updateCard', this.card)
            this.disabled = true
        },
    },
    computed: {
        backgrounds() {
            return this.$store.getters.backgrounds_cards
        },
        card() {
            return this.$store.getters.cardInfo
        },
    }
}
</script>
