import {lazy, Suspense} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import loader from "../src/images/loader.gif";
function App() {
  return (
  <>
    <Suspense fallback={
       <div className='d-flex justify-content-center align-content-center'>
           <img src={loader} alt='Loading..' className='img-fluid'/>
       </div>
    }>
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
  </>
  );
}

export default App;
