import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Countries from './Countries';
import loader from '../../images/loader.gif';
const Home = () => {
    const [countries,setCountries] = useState([]);
    const [name,setName] = useState('');
    const [filterCountries,setFilterCountries] = useState([]);
    
    useEffect(() =>{
         fetch(`https://restcountries.eu/rest/v2/all`)
         .then(response => response.json())
         .then(data => setCountries(data))
      },[]);
     
    useEffect(() =>{
        setFilterCountries(
            countries.filter(country => 
                country.name.toLowerCase().includes(name.toLowerCase())
            )
        )
    },[name,countries])

    return (
        <Container className='py-5'>
           <Row>
               <Col md={10}>
                   <Row>
                      {
                        filterCountries.map((country,index)=> <Countries 
                        key={index} 
                        country={country}/>)
                      }
                   </Row>
               </Col>
               <Col md={2}>
               <div>
                <input 
                type="text" 
                className="form-control " 
                name="search" 
                placeholder="Search.."
                onChange={(e)=>setName(e.target.value)}
                />
                <Button variant="outline-primary">Search</Button>
               </div>
               </Col>
           </Row>
        </Container>
    );
};


export default Home;

/*
 <div className='d-flex justify-content-center align-content-center mb-3'>
                <input 
                type="text" 
                className="form-control w-25 p-2 mr-2" 
                name="search" 
                placeholder="Search.."
                onChange={(e)=>setName(e.target.value)}
                />
                <Button variant="outline-primary">Search</Button>
            </div>



*/