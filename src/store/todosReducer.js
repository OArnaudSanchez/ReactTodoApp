import types from "./types";

const todosReducer = ( state = [] , action ) => {

    switch (action?.type) {
        case types.ADD_TODO :
            return [ action.payload, ...state ]
        
        case types.SET_STATUS :
            return state.map( todo => (
                (todo.id === action.payload) ? { ...todo, isDone: !todo.isDone } : todo
            ));
        
        case types.DELETE_TODO : 
            return state.filter( todo => todo.id !== action.payload );

        default:
            return state;
    }

};

export default todosReducer;