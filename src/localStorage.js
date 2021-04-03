export const addToDo_LOCAL = (toDo, id) => {
    if (localStorage.getItem("toDos") === null) {
        const newToDo = [{ toDo, id }]
        localStorage.setItem("toDos", JSON.stringify(newToDo))
    } else {
        let toDos = localStorage.getItem("toDos")
        const newToDo = { toDo, id }
        toDos = JSON.parse(toDos)
        toDos.push(newToDo)
        localStorage.setItem("toDos", JSON.stringify(toDos))
    }
}

export const deleteToDo_LOCAL = (id) => {
    let toDos = localStorage.getItem("toDos")
    toDos = JSON.parse(toDos)
    toDos = toDos.filter(item => item.id !== id)
    localStorage.setItem("toDos", JSON.stringify(toDos))
}