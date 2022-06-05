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
                    !e.target.classList.contains('settings__cancel') &&
                    !e.target.classList.contains('tasks__item-settings') &&
                    !e.target.classList.contains('tasks__item-settings-icon') &&
                    !e.target.classList.contains('create-task-btn')) {
                    clearAll()
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
        }
    }
}

