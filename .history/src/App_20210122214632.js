import { createContext, lazy, Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
export const CountriesContext = createContext();
function App() {
  const [countries,setCountries] = useState([]);

  useEffect(() =>{
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then(response => response.json())
    .then(data => setCountries(data))
 },[]);

  return (
  <CountriesContext.Provider value={[countries,setCountries]}>
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
  </CountriesContext.Provider>
  );
}

export default App;
