import { useHistory ,useParams} from 'react-router-dom';
import useFetch from './useFetch';

const TodoDetail = () => {
    const {id} =useParams();
    const {data:todos,loading,response} = useFetch('http://localhost:8000/todos/' + id);

    const history=useHistory();

    const handleClick = () =>{
        fetch('http://localhost:8000/todos/' + todos.id,{
            method:"DELETE"
        }).then(() =>{
            history.push('/')
        })
    }

    return ( 
        <div className="todo-detail">
            {loading && <div><h4>Loading....</h4></div>}
            {response && <div>{response}</div>}
            {todos && (
                <article>
                    <h2>{todos.Title}</h2>
                    <p><b>About your Todo</b></p>
                    <div>
                        {todos.body}
                    </div>
                    <button onClick={handleClick}>Delete Todo</button>
                </article>
            )}
        </div>
     );
}
 
export default TodoDetail;