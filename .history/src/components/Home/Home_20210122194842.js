import React, { useEffect } from 'react';
import { useState } from 'react';;
const Home = () => {
    const [countries,setCountries] = useState([]);
    useEffect(() =>{
         fetch(`https://restcountries.eu/rest/v2/all`)
         .then(response => response.json())
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