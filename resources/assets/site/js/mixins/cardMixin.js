export const cardMixin = {
    methods: {
        actionModal(e) {
            if (!e.target.classList.contains('details__actions-modal-input') &&
                !e.target.classList.contains('details__actions-modal-btn') &&
                !e.target.classList.contains('details__actions-modal-top') &&
                !e.target.classList.contains('details__actions-modal-title') &&
                !e.target.classList.contains('details__actions-modal-subtitle') &&
                !e.target.classList.contains('details__actions-modal') &&
                !e.target.classList.contains('details__actions-modal-input') &&
                !e.target.classList.contains('btn-date') &&
                !e.target.classList.contains('dp__input_icon_pad') &&
                !e.target.classList.contains('dp__input_wrap') &&
                !e.target.classList.contains('dp__input_icon') &&
                !e.target.classList.contains('dp__main') &&
                !e.target.classList.contains('tag__edit') &&
                !e.target.classList.contains('tag__wrapper') &&
                !e.target.classList.contains('details__window-tags') &&
                !e.target.classList.contains('details__actions-input') &&
                !e.target.classList.contains('tag__edit-icon') &&
                !e.target.classList.contains('details__actions-edit')
            ) {
                this.show = !this.show
            }
        },
    }
}
