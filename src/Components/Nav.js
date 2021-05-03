import {Link} from 'react-router-dom';
const Nav = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <h1>Todo List</h1>
        <div className="links">
          <Link to="/"><b>Home</b></Link>
          <Link to="/NewTodo"><b>New Todo</b></Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
