import { ADD_TODO } from './actionTypes.js';

export const addTodo = title => ({
    type: ADD_TODO,
    payload: {
        title
    }
})