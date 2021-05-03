import {useState} from "react";
import {useHistory} from 'react-router-dom';
const NewTodo = () => {

    const [Title, setTitle] = useState('');
    const [Action, setAction] = useState('');
    const [body, setbody] = useState('');
    const [loading, setloading] = useState(false);
    const history=useHistory();

    const handleSubmit=(e) =>{
        e.preventDefault();

        const todos={Title,Action,body};

        setloading(true);

        fetch('http://localhost:8000/todos',{
            method:'POST',
            headers:{"Content-Type": "application/json" },
            body:JSON.stringify(todos)
        }).then (()=>{
            console.log('new todo added');
            setloading(false);
            history.push('/');
        })
    }

    return (
        <div className="NewTodo">
            <h2>Add a New Todo</h2>
            <form onSubmit={handleSubmit}>
                <label>Todo Title:</label>
                <input 
                    type="text"
                    required
                    value={Title}
                    onChange ={(e) => setTitle(e.target.value)}
                />
                <label>Todo Action:</label>
                <input 
                    type="text"
                    required
                    value={Action}
                    onChange={(e)=> setAction(e.target.value)}
                />
                <label>Todo Body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={ (e) => setbody(e.target.value)} 
                />
                {!loading && <button>Add Todo</button>}
                {loading && <button disabled>Adding Todo...</button>}
            </form>
        </div>
    );
}

export default NewTodo;
