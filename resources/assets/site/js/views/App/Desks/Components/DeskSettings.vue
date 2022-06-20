<template>
    <div class="settings" @click.prevent>
        <div class="settings__title" @click.prevent>
            Действия с доской
        </div>
        <div class="settings__items">
            <DeleteDesk @open="showTab"
                        @closed="closedTabs"
                        :desk="desk"/>
        </div>
        <div class="settings__items">
            <ReplaceBackground @open="showTab"
                               @click="this.$store.dispatch('getBackgroundsDesks')"
                               @closed="closedTabs"
                               :desk="desk"/>
        </div>
    </div>
</template>

<script>

import DeleteDesk from "./Settings/Desks/DeleteDesk";
import ReplaceBackground from "./Settings/Desks/ReplaceBackground";

export default {
    name: "DeskSettings",
    props: ['desk'],
    components: {DeleteDesk, ReplaceBackground},
    methods: {
        closedTabs() {
            document.querySelectorAll('.settings__item-alert').forEach(el => el.classList.remove('show'))
            document.querySelectorAll('.settings__item-btn').forEach(el => el.classList.add('show'))
        },
        showTab(e) {
            this.closedTabs()
            let parent = e.target.closest('.settings__item'),
                btn = parent.querySelector('.settings__item-btn'),
                tab = parent.querySelector('.settings__item-alert')
            if (btn.classList.contains('show')) {
                btn.classList.remove('show')
                tab.classList.add('show')
            } else {
                btn.classList.add('show')
                tab.classList.remove('show')
            }
        },
    }

}
</script>
