import Nav from './Components/Nav';
import Content from './Components/Content';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NewTodo from './Components/NewTodo';
import TodoDetail from './Components/TodoDetail';
import Notfound from './Components/Notfound';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <div className="content">
          <Switch>
            <Route exact path="/">
             <Content/>
            </Route>
            <Route path="/NewTodo">
              <NewTodo/>
            </Route>
            <Route path="/todo/:id">
              <TodoDetail/>
            </Route>
            <Route path="*">
              <Notfound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
