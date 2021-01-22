import axios from "axios";
import { 
    NAME_SEARCH_METHOD,
    FULL_NAME_SEARCH_METHOD,
    CODE_SEARCH_METHOD,
    CURRENCY_SEARCH_METHOD,
    LANGUAGE_SEARCH_METHOD,
    CAPITAL_CITY_SEARCH_METHOD,
    REGION_SEARCH_METHOD
} from "../actions/actions";

const initialState = {
    countries:[]
}

async function getCountries() {
    try {
      const response = await axios.get('https://restcountries.eu/rest/v2/all');
      initialState.countries = [...initialState.countries,response.data];
    } catch (error) {
      console.error(error);
    }
  }

getCountries();

export const countriesReducer = (state = initialState, action)=>{
     console.log(state);
     if(action.type===NAME_SEARCH_METHOD){

     }
     if(action.type===FULL_NAME_SEARCH_METHOD){
         
    }
    if(action.type===CODE_SEARCH_METHOD){
         
    }
    if(action.type===CURRENCY_SEARCH_METHOD){
         
    }
    if(action.type===LANGUAGE_SEARCH_METHOD){
         
    }
    if(action.type===CAPITAL_CITY_SEARCH_METHOD){
         
    }
    if(action.type===REGION_SEARCH_METHOD){
         
    }
    return state;
}