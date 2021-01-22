
import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
function App() {
  return (
    <>
       <Router>
          <Switch>
              <Route path='/home' component={Home}/>
              <Route exact path='/' component={Home}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
