export const getPercentPerformedTasks = (checkLists) => {
    let scales = [];
    checkLists.forEach(el => {
        if (el.tasks.length) {
            let countAllTasks = el.tasks.length;
            let countCheckTasks = el.tasks.filter((task) => task.check).length;
            let rate = countAllTasks / countCheckTasks
            let percent = 100 / rate
            scales.push({id: el.id, percent})
        }
    })
    return scales;
}
