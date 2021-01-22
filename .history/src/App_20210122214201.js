import { createContext, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
export const Countries = createContext();
function App() {
  const [countries,setCountries] = useState([]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
       <Router>
          <Switch>
              <Route path='/home' 
              component={
                 lazy(()=>import("./components/Home/Home"))
              }/>
              <Route exact path='/' 
              component={
                 lazy(()=>import("./components/Home/Home"))
              }/>
          </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
