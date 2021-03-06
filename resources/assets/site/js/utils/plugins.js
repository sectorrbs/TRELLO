export default {
    install(app, options) {
        app.config.globalProperties.$closed = (key) => {

            clearAll()

            switch (key) {
                case 'settings':
                    clearListBottom()
                    break;
                case 'addNewCard':
                    clearSettingsBtn()
                    clearSettingsList()
                    break;
                case 'renameList':
                    clearSettingsBtn()
                    clearSettingsList()
                    clearListBottom()
                    break;
                case 'renameDesk':
                    clearDeskLists()
                    break;
                case 'cardActions':
                    clearCardActionsModal()
                    break;
            }

            window.addEventListener('click', e => {
                if (!e.target.classList.contains('desks__settings') &&
                    !e.target.classList.contains('desks__edit') &&
                    !e.target.classList.contains('desks__list-btn') &&
                    !e.target.classList.contains('desks__list-input') &&
                    !e.target.classList.contains('desks__item-input') &&
                    !e.target.classList.contains('settings__item-btn') &&
                    !e.target.classList.contains('settings__title') &&
                    !e.target.classList.contains('swiper-slide') &&
                    !e.target.classList.contains('settings') &&
                    !e.target.classList.contains('swiper-button-next') &&
                    !e.target.classList.contains('swiper-button-prev') &&
                    !e.target.classList.contains('settings__item-text') &&
                    !e.target.classList.contains('settings__item-alert') &&
                    !e.target.classList.contains('settings__cancel') &&
                    !e.target.classList.contains('tasks__item-settings') &&
                    !e.target.classList.contains('tasks__item-settings-icon') &&
                    !e.target.classList.contains('create-task-btn') &&
                    !e.target.classList.contains('details__window-title') &&
                    !e.target.classList.contains('details__window-card-rename') &&
                    !e.target.classList.contains('details__window-checklist-rename') &&
                    !e.target.classList.contains('details__window-checklist-btn') &&
                    !e.target.classList.contains('details__actions-modal-title') &&
                    !e.target.classList.contains('details__actions-modal-label') &&
                    !e.target.classList.contains('details__actions-modal-top') &&
                    !e.target.classList.contains('details__actions-input') &&
                    !e.target.classList.contains('attachment__section-input') &&
                    !e.target.classList.contains('details__window-icon') &&
                    !e.target.classList.contains('attachment__section-btns') &&
                    !e.target.classList.contains('attachment__section-btns') &&
                    !e.target.classList.contains('details__window-checklist-title')
                ) {
                    clearAll()
                }
            })

            // ?????? ????????????????????????
            window.addEventListener('click', e => {
                if (!e.target.classList.contains('comments__field')
                    && !e.target.classList.contains('comments__box-actions')
                    && !e.target.classList.contains('comments__btn')
                    && !e.target.classList.contains('details__window-action-btn')
                    && !e.target.classList.contains('comments__box-icon')
                    && !e.target.classList.contains('comments__box-option')) {
                    clearNewCommentField()
                }
            })

            function clearAll() {
                document.querySelectorAll('.desks__item-rename').forEach(el => {
                    el.classList.remove('show')
                })
                document.querySelectorAll('.desks__item-input').forEach(el => {
                    el.classList.remove('show')
                })
                document.querySelectorAll('.desks__list-bottom').forEach(el => {
                    el.classList.remove('open')
                })
                document.querySelectorAll('.desks__settings')
                    .forEach(el => el.classList.remove('open'))
                document.querySelectorAll('.desks__list-settings')
                    .forEach(el => el.classList.remove('open'))
                document.querySelectorAll('.desks__list')
                    .forEach(el => el.classList.remove('show'))
                document.querySelectorAll('.details__actions-modal')
                    .forEach(el => el.classList.remove('show'))
                document.querySelectorAll('.tasks__item-settings')
                    .forEach(el => el.classList.remove('show'))
                document.querySelectorAll('.details__window-checklist-form')
                    .forEach(el => {
                        el.classList.remove('show')
                    })
                document.querySelectorAll('.details__window-card-form')
                    .forEach(el => {
                        el.classList.remove('show')
                    })
                document.querySelectorAll('.party__settings-btn')
                    .forEach(el => {
                        el.classList.remove('open')
                    })
                document.querySelectorAll('.settings__item-alert')
                    .forEach(el => el.classList.remove('show'))
                document.querySelectorAll('.settings__item-btn')
                    .forEach(el => el.classList.add('show'))
                document.querySelectorAll('.attachment__section-right')
                    .forEach(el => el.classList.remove('rename'))
            }

            function clearDeskLists() {
                document.querySelectorAll('.desks__item-rename').forEach(el => {
                    el.classList.remove('show')
                })
                document.querySelectorAll('.desks__item-input').forEach(el => {
                    el.classList.remove('show')
                })
            }

            function clearListBottom() {
                document.querySelectorAll('.desks__list-bottom')
                    .forEach(el => el.classList.remove('open'));
            }

            function clearSettingsBtn() {
                document.querySelectorAll('.desks__settings')
                    .forEach(el => el.classList.remove('open'))
            }

            function clearSettingsList() {
                document.querySelectorAll('.desks__settings-list')
                    .forEach(el => el.classList.remove('open'))
            }

            function clearCardActionsModal() {
                document.querySelectorAll('.details__actions-modal')
                    .forEach(el => el.classList.remove('show'))
            }

            function clearNewCommentField() {
                document.querySelectorAll('.comments__box').forEach(el => {
                    if (!el.querySelector('.comments__field').value) {
                        el.classList.remove('active')
                        document.querySelector('.comments__field').style.height = `30px`
                    }
                    el.classList.remove('focus')
                })
            }
        }
    },
}

