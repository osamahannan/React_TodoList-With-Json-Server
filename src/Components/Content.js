import TodoList from './TodoList';
import useFetch from './useFetch';
const Content = () => {

    const {data:todos, loading ,response}= useFetch('http://localhost:8000/todos');
    
    return (
        <div className ="content">
            {response && <div>{response}</div>}
            {loading && <div><h4>Loading....</h4></div>}
            {todos && <TodoList todos={todos} title="Your Todos!" />}
        </div>
    );
}

export default Content;