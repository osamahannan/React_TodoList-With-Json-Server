import { Link } from "react-router-dom";

const TodoList = ({todos,title}) => {

    return ( 
        <div className= "Todo-List">
            <h2>{title}</h2>
            {todos.map((todo) => (
                <div className="blog-preview" key={todo.id}>
                        <Link to={`/todo/${todo.id}`}>
                            <h2>{todo.Title}</h2>
                            <p>{todo.Action}</p>
                        </Link>
                </div>
            ))}
        </div>
     );
}
 
export default TodoList;