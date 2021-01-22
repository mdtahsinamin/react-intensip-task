import React, { useEffect } from 'react';
import { useState } from 'react';
import {api} from '../../constant/constant';
const Home = () => {
    const [countries,setCountries] = useState([]);
    useEffect(() =>{
         fetch(`${api.baseUrl}/all`)
         .then((response => response.json()))
         .then(data => setCountries(data))
      },[]);
      console.log(countries)
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

export default Home;