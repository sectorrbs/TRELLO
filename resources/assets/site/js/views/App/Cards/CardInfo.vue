<template>
    <div v-if="cardInfo" class="details__window">

        <ModalLoad v-if="modalLoad"/>

        <div class="details__window-top">
            <div class="details__window-content">
                <div class="details__window-title">
                    <Fa :type="'r'"
                        :name="'desktop-alt details__window-icon'"/>
                    {{ cardInfo.name }}
                </div>
                <div class="details__window-subtitle">
                    В колонке
                    <div class="details__window-card">
                        {{cardInfo.deskList.name}}
                    </div>
                </div>
            </div>
        </div>
        <div class="details__window-bottom">
            <div class="details__window-bottom-left">
                <CardParticipants/>
                <CardDescription/>
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
import CardDescription from './Components/CardDescription'
import CardComment from './Components/CardComment'
import CardActions from './Components/CardActions'

export default {
    name: "CardInfo",
    props: ['cardInfo'],
    components: {CardParticipants, CardDescription, CardComment, CardActions},
    computed: {
        ...mapGetters(['modalLoad'])
    }
}
</script>
