export const getPercentPerformedTasks = (checkLists) => {
    let scales = [];
    checkLists.forEach(el => {
        if (el.tasks.length) {
            let countAllTasks = el.tasks.length;
            let countCheckTasks = el.tasks.filter((task) => task.check).length;
            let rate = countAllTasks / countCheckTasks
            let percent = 100 / rate
            scales.push({id: el.id, percent})
        } else {
            scales.push({id: el.id, percent: -1})
        }
    })
    return scales;
}


export const getInitialsFromUserName = (name) => {
    let arr = name.split(' ')
    let initials = ''
    arr.forEach(el => {
        initials += el[0].toUpperCase()
    })
    return initials;
}


export const getCountTasks = (card) => {

    let cardItem = document.querySelector(`[data-card-item="${card.id}"]`)
    let cardTasksCountSection = cardItem.querySelector('.desks__cards-count-tasks')
    let performedTasksOldCount = cardItem.querySelector('.count-performed')
    let oldCountAllTasks = cardItem.querySelector('.count-notperformed')

    let newCountAllTask = getCountAllTasks()
    let countPerformedTasks = getCountPerformTasks()

    if (newCountAllTask) {
        cardTasksCountSection.classList.remove('hidden')
        performedTasksOldCount.innerHTML = countPerformedTasks
        oldCountAllTasks.innerHTML = newCountAllTask
    } else {
        cardTasksCountSection.classList.add('hidden')
    }

    getSuccessAllTasks(newCountAllTask, countPerformedTasks)

    function getSuccessAllTasks(countAll, countPerformed) {
        if (countAll === countPerformed && countAll) {
            cardItem.classList.add('success')
        } else {
            cardItem.classList.remove('success')
        }
    }

    function getCountPerformTasks() {
        let count = 0
        card.checkLists.forEach(el => {
            let tasks = el.tasks.filter(task => task.check === 1)
            count += tasks.length
        })
        return count
    }

    function getCountAllTasks() {
        let count = 0
        card.checkLists.forEach(el => {
            count += el.tasks.length
        })
        return count
    }
}
