export const settingsWindowMixin = {
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
