export const cardMixin = {
    methods:{
        actionModal(e) {
            if (!e.target.classList.contains('details__actions-modal-input') &&
                !e.target.classList.contains('details__actions-modal-btn')) {
                this.show = !this.show
            }
        }
    },
}
