export const dateMixin = {
    methods: {
        reformatDateDayAndMonth(date) {
            let month = +(date.split('/')[0]) - 1
            let day = date.split('/')[1]
            let year = date.split('/')[2]
            const months =
                [
                    "января",
                    "февраля",
                    "марта",
                    "апреля",
                    "мая",
                    "июня",
                    "июля",
                    "августа",
                    "сентября",
                    "октября",
                    "ноября",
                    "декабря"
                ];

            let reformatDate = `${day} ${months[month]}`


        }
    },
    computed: {
        currentDate() {
            let month = new Date().getMonth() + 1
            month = month < 10 ? '0' + month : month
            let day = new Date().getDate()
            day = day < 10 ? '0' + day : day
            let year = new Date().getFullYear()
            let hours = new Date().getHours()
            hours = hours < 10 ? '0' + hours : hours
            let minutes = new Date().getMinutes()
            minutes = minutes < 10 ? '0' + minutes : minutes
            return `${month}/${day}/${year}, ${hours}:${minutes}`
        },

    },
}
