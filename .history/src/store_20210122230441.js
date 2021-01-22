import { createStore } from "redux";
import { countriesReducer } from "./Reducers/reducer";

export const store = createStore(countriesReducer);
