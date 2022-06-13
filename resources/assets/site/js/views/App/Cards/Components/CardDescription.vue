<template>
    <div class="details__window-description">
        <div class="details__window-description-title">
            <Fa :type="'r'"
                :name="'stream details__window-icon'"/>
            Описание
        </div>
        <div class="details__window-description-more">
            <div v-if="card.description">
                <div class="details__window-description-btn" v-if="!field" @click="toggleCreateDescription">
                    <span v-html="text"></span>
                </div>
                <CardAddDescriptionField
                    @hidden="field = false"
                    :descr="descriptionData"
                    :oldDescr="descriptionData"
                    :card="card"
                    v-else/>
            </div>
            <div v-else>
                <div class="details__window-description-btn" v-if="!field" @click="toggleCreateDescription">
                    Добавить более подробное описание
                </div>
                <CardAddDescriptionField @hidden="field = false" :card="card" v-else/>
            </div>
        </div>
    </div>
</template>

<script>

import CardAddDescriptionField from './CardAddDescriptionField'

export default {
    name: "Description",
    data: () => ({
        field: false,
        descriptionText: null,
        description: null
    }),
    props: ['card'],
    components: {CardAddDescriptionField},
    methods: {
        toggleCreateDescription() {
            this.field = !this.field
        },
        hided(e) {

        }
    },
    mounted() {
        window.addEventListener('click', (e) => {
            if (!e.target.classList.contains('details__window-checklist-input') &&
                !e.target.classList.contains('create-task-btn') &&
                !e.target.classList.contains('details__window-description-btn')) {
                this.field = false
            }
        })
    },
    computed: {
        descriptionData() {
            return this.description = this.card.description
        },
        text() {
            let tag = /\n/gi;
            let str = this.card.description;
            return str.replace(tag, '<br/>');
        }
    }
}
</script>
