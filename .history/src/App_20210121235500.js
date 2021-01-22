import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
       <Router>
          <Switch>
              <Route path='/home' component={Home}/>
          </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
