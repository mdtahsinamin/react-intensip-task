import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
const Home = () => {
    /*const [countries,setCountries] = useState([]);
    useEffect(() =>{
         fetch(`https://restcountries.eu/rest/v2/all`)
         .then(response => response.json())
         .then(data => setCountries(data))
      },[]);
      console.log(countries)*/
    return (
        <Container>
            <h1>Hello</h1>
        </Container>
    );
};

export default Home;