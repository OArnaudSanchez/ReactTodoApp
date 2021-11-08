import { useForm } from "../../hooks/useForm";
import PropTypes from 'prop-types';

const TodoForm = ({ addTodo }) => {
  
  const [ { title, description }, handleInputChange, resetForm ] = useForm({ title: '', description: '' });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newTodo = {
      id: new Date().getTime(),
      title,
      description,
      isDone: false
    };

    addTodo(newTodo);
    resetForm();
  };

  return (
    <form className="row" onSubmit = { handleSubmit }>
      <div className="form-group col-12 col-md-8">
        <input
          type="text"
          name='title'
          placeholder="Title..."
          className="form-control p-2 order-fisrt"
          onChange = { handleInputChange }
          value = { title }
          required
        />
      </div>
      <div className="form-group col-12 col-md-4 order-xs-last order-2">
        <div className="d-grid gap-2 mt-2 mt-md-0">
          <button className="btn btn-primary">Add Task</button>
        </div>
      </div>
      <div className="form-group col-12 mt-1 order-md-3">
        <textarea
          name='description'
          placeholder="Description..."
          className="form-control"
          onChange = { handleInputChange }
          value = { description }
          required
        />
      </div>
    </form>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default TodoForm;
