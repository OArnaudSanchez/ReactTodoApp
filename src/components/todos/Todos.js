import { useEffect, useReducer } from 'react';
import TodoForm from './TodoForm';
import TodoListItem from './TodoListItem';
import todosReducer from '../../store/todosReducer';
import types from '../../store/types';

const Todos = () => {

    const NAME = 'Todos';

    const initTodoReducer = () => JSON.parse(localStorage.getItem(NAME)) || [];

    const [ todos, dispatch ] = useReducer(todosReducer, [], initTodoReducer);

    useEffect(() => {
        localStorage.setItem(NAME, JSON.stringify(todos) );
    }, [ todos ]);

    const addTodo = (newTodo) => {
        dispatch({
            type: types.ADD_TODO,
            payload: newTodo
        });
    };

    const updateStatus = (todoId) => {
        dispatch({
            type: types.SET_STATUS,
            payload: todoId
        });
    };

    const deleteTodo = (todoId) => {
        dispatch({
            type: types.DELETE_TODO,
            payload: todoId
        });
    };
    
    return(
        <main>
            <div className="row">
                <div className="col">
                    <TodoForm 
                        addTodo = { addTodo }
                    />
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col">
                    {
                        todos.map( todo => (
                            <TodoListItem 
                                todo = { todo } 
                                key = { todo.id } 
                                updateStatus = { updateStatus }
                                deleteTodo = { deleteTodo } 
                            />
                        ))
                    }
                </div>
            </div>
        </main>
    )

};

export default Todos;