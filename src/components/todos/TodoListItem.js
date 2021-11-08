import { useState } from "react";

const TodoList = ({ todo, updateStatus, deleteTodo }) => {

  const [ isChecked, setIsChecked ] = useState(false);
  
  const handleCheck = () => {
    setIsChecked( !isChecked );
    updateStatus(todo.id);
  };

  return (
    <section className='todo-list p-2 mt-2'>
      <div className="row">
        <div className="col-auto d-flex align-items-center">
          <input 
            name='isDone'
            value = { isChecked }
            checked = { todo.isDone }
            onChange = { handleCheck }
            className="form-check-input" 
            type="checkbox" />
        </div>
        <div className="col">
          <h5 className={ todo.isDone ? 'complete' : '' }>{ todo.title }</h5>
        <p className={ todo.isDone ? 'complete' : '' }>{ todo.description }</p>
        </div>
        <div className="col d-flex align-items-center justify-content-end">
          <button className="btn" onClick = { () => deleteTodo(todo.id) }>
            <i className="far fa-trash-alt text-danger"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TodoList;
