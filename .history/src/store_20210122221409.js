import { createStore } from "redux";
import { countriesReducer } from "./Reducers/reducer";

export default const store = createStore(countriesReducer);