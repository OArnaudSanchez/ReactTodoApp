import Header from "../layout/Header";
import Todos from "./Todos";

const TodoApp = () => {

    return(
        <div className='container'>
            <Header />
            <Todos />
        </div>
    )

};

export default TodoApp;