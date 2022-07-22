export const initialMixin = {
    methods: {
        getInitials(name) {

            let arr = name.split(' ')
            let initials = ''
            arr.forEach(el => {
                initials += el[0].toUpperCase()
            })
            return initials;
        }
    },
    autoSize(e) {
        this.isDisabled(e)
        this.calculationSize(e.target)
    },
}
