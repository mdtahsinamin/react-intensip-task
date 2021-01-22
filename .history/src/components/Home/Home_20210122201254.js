import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Countries from './Countries';
const Home = () => {
    const [countries,setCountries] = useState([]);
    useEffect(() =>{
         fetch(`https://restcountries.eu/rest/v2/all`)
         .then(response => response.json())
         .then(data => setCountries(data))
      },[]);
      console.log(countries);
    return (
        <Container className='py-5'>
           {
               countries.map(
                   (country,index)=> <Countries key={index} country={country}/> 
                )
           }
        </Container>
    );
};

export default Home;