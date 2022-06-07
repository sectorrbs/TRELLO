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
