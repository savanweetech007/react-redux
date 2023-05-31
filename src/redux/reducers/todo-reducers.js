import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../actions/actions-types";

const initialState = []

export default (state = initialState, action) => {

    switch (action.type) {
        case ADD_TODO: {
            console.log("add_todo_clicked");
            console.log("state == ", [...state, action.payload]);
            return [...state, action.payload]
        }
        break;
    
        case REMOVE_TODO: {
            const newState = state.filter((todo) => todo.id !== action.payload)
            return newState
        }
        break;

        case UPDATE_TODO: {
            const updatedState = state.map(todo => {
                if(todo.id === action.payload.todoId) {
                    todo.title = action.payload.todo.title
                    todo.description = action.payload.todo.description
                    return todo
                } else {
                    return todo
                }
            })

            return updatedState
        }
        break;

        default:
            return state
    }

}