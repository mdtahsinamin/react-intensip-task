import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
       <Router>
          <Switch>
              <Route path='/home' 
              component={
                 lazy(()=>import("./components/Home/Home"))
              }/>
          </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
