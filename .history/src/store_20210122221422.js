import { createStore } from "redux";
import { countriesReducer } from "./Reducers/reducer";

const store = createStore(countriesReducer);

export default store;