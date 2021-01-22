import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import Countries from './Countries';
const Home = () => {
    const [countries,setCountries] = useState([]);
    const [filterCountries,setFilterCountries] = useState([]);

    useEffect(() =>{
         fetch(`https://restcountries.eu/rest/v2/all`)
         .then(response => response.json())
         .then(data => setCountries(data))
      },[]);



    return (
        <Container className='py-5'>
            <div className='d-flex justify-content-center align-content-center mb-3'>
                <input 
                type="text" 
                className="form-control w-25 p-2 mr-2" 
                name="search" 
                placeholder="Search.."
                />
                <Button variant="outline-primary">Primary</Button>
            </div>
           <Row>
                {
                    countries.map(
                        (country,index)=> <Countries key={index} country={country}/> 
                        )
                }
           </Row>
        </Container>
    );
};

export default Home;