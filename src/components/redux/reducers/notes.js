import { ADD_TODO, DELETE_TODO } from '../actionTypes';

const initialState = {
    notes: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO: {
            const {title} = action.payload; 
            return {
                ...state.notes,
                title
            }

        }
        case GET_TODO: {
            return { ...state.notes }
        }
        default:
            return state;
    }
}