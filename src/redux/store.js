import { combineReducers, createStore } from "redux";
import todoReducers from "./reducers/todo-reducers";

const rootReducer = combineReducers({
    todoReducers
})

const store = createStore(rootReducer)

export default store