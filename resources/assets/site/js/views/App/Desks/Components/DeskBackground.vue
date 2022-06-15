<template>
    <div class="desks__form-bg">

        <swiper :modules="modules"
                :space-between="5"
                :slides-per-view="5"
                :slides-per-group="5"
                :navigation="true">
            <swiper-slide v-for="background in backgrounds"
                          :key="background.id"
                          @click="bgSelection($event,background.id)"
                          :style="
                          {
                              background: background.image
                              ? `url('/storage/backgrounds/thumb_55_40/${background.image}')`
                              : background.color
                          }"/>
        </swiper>

    </div>
</template>

<script>

import {Pagination, Navigation} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default {
    name: "DeskBackground",
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
        bgSelection(e, id) {
            if (e.currentTarget.classList.contains('select')) {
                e.currentTarget.classList.remove('select')
                this.$emit('changeBgId', 1)
            } else {
                document.querySelectorAll('.swiper-slide').forEach(el => {
                    el.classList.remove('select')
                })
                e.currentTarget.classList.add('select')
                this.$emit('changeBgId', id)
            }
        }
    },
    computed: {
        backgrounds() {
            return this.$store.getters.backgrounds
        }
    }

}
</script>
