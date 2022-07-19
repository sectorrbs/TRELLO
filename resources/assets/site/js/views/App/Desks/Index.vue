<template>

    <div class="content">
        <div class="container page__content">
            <div class="page__content-left">
                <Sidebar/>
            </div>
            <div v-if="parties" class="page__content-right">
                <Room :parties="parties"/>
            </div>
        </div>
    </div>

</template>

<script>

import Room from "../Room/Index";
import {mapActions, mapGetters} from 'vuex'

export default {
    name: "Desks",
    components: {Room},
    mounted() {
        this.getRoomParty();
        this.getDeskParty();
    },
    methods: {
        ...mapActions(['getDeskParty', 'getRoomParty'])
    },
    computed: {
        ...mapGetters(['deskParty', 'roomParty']),
        parties() {
            if (this.roomParty && this.deskParty) {
                let allParties = [...this.roomParty, ...this.deskParty]
                let result = []
                allParties.filter(el => {
                    let i = result.findIndex(item => item.room_id === el.room_id)
                    if (i === -1) {
                        result.push(el)
                    }
                })
                return result
            }
        }
    },
}
</script>
