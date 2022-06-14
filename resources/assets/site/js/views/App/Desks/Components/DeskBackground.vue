<template>
    <div class="desks__form-bg">

        <swiper :modules="modules"
                :space-between="5"
                :slides-per-view="5"
                :slides-per-group="5"
                :loop="true"
                :loop-fill-group-with-blank="true"
                :navigation="true">
            <swiper-slide style="background: rgb(0, 121, 191)"></swiper-slide>
            <swiper-slide style="background: rgb(210, 144, 52)"></swiper-slide>
            <swiper-slide style="background: rgb(81, 152, 57)"></swiper-slide>
            <swiper-slide style="background: rgb(176, 70, 50)"></swiper-slide>
            <swiper-slide style="background: rgb(137, 96, 158)"></swiper-slide>
            <swiper-slide style="background: rgb(246,224,86)"></swiper-slide>
        </swiper>

    </div>
</template>

<script>

import { defineComponent } from 'vue'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
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
    }

}
</script>
