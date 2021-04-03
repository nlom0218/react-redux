import { createStore } from "redux"

const toDos = localStorage.getItem("toDos")

const initState = {
    toDos: JSON.parse(toDos) ? JSON.parse(toDos) : [],
    selete_ID: null
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return { ...state, toDos: [...state.toDos, { id: action.id, toDo: action.toDo }] }
        case "DEL_TODO":
            return { ...state, toDos: state.toDos.filter(toDo => action.id !== toDo.id) }
        case "DETAIL_TODO":
            return
        default:
            return state
    }
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store