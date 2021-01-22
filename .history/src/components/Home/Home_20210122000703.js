import React, { useEffect } from 'react';
import { useState } from 'react';
import {api} from '../../constant/api';
const Home = () => {
    const [countries,setCountries] = useState([]);
    const {baseUrl} = api 
    useEffect(() =>{
         fetch(`${baseUrl}/all`)
         .then((response => response.json()))
         .then(data => setCountries(data))
      },[]);
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

export default Home;