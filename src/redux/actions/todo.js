import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./actions-types";

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo
})

export const removeTodo = (todo_id) => ({
    type: REMOVE_TODO,
    payload: todo_id
})

export const updateTodo = (todo, id) => ({
    type: UPDATE_TODO,
    payload: {
        todo: todo,
        todoId: id
    }
})