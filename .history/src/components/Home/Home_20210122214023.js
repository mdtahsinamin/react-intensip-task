import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Countries from './Countries';
import loader from '../../images/loader.gif';
import { handleCountryName } from '../Functions/Functions';
const Home = () => {
    const [countries,setCountries] = useState([]);
    const [name,setName] = useState('');
    const [filterCountries,setFilterCountries] = useState([]);
    
    useEffect(() =>{
         fetch(`https://restcountries.eu/rest/v2/all`)
         .then(response => response.json())
         .then(data => setCountries(data))
      },[]);
     
   /* useEffect(() =>{
        setFilterCountries(
            countries.filter(country => 
                country.name.toLowerCase().includes(name.toLowerCase())
            )
        )
    },[name,countries])*/
   
    

    return (
        <Container className='py-5'>
           <Row>
               <Col md={10}>
                   <Row>
                      {
                        countries.map((country,index)=> <Countries 
                        key={index} 
                        country={country}/>)
                      }
                   </Row>
               </Col>

               <Col md={2}>
               <div>
                 <h5>Filter Methods :</h5>
                <label>NAME</label>
                <input 
                    type="text" 
                    className="form-control " 
                    name="name" 
                    placeholder="Search.."
                    onChange={handleCountryName}
                />
                <label>FULL NAME</label>
                <input 
                    type="text" 
                    className="form-control " 
                    name="fullName" 
                    placeholder="Search.."
                   // onChange={}
                />
                <label>CODE</label>
                <input 
                    type="text" 
                    className="form-control " 
                    name="code" 
                    placeholder="Search.."
                    //onChange={}
                />
                <label>CURRENCY</label>
                <input 
                    type="text" 
                    className="form-control " 
                    name="currency" 
                    placeholder="Search.."
                    //onChange={}
                />
                <label>LANGUAGE</label>
                <input 
                    type="text" 
                    className="form-control " 
                    name="language" 
                    placeholder="Search.."
                    //onChange={}
                />
                <label>CAPITAL CITY</label>
                <input 
                    type="text" 
                    className="form-control " 
                    name="capital" 
                    placeholder="Search.."
                    //onChange={}
                />
                <label>REGION</label>
                <input 
                    type="text" 
                    className="form-control " 
                    name="region" 
                    placeholder="Search.."
                    //onChange={}
                />
                <Button className="mt-3" variant="outline-primary">Search</Button>
               </div>
               </Col>
           </Row>
        </Container>
    );
};


export default Home;

/*
if(e.target.name==='fullName'){
        fetch(`https://restcountries.eu/rest/v2/name/${e.target.value}?fullText=true`)
         .then(response => response.json())
         .then(data => setCountries(data))
        }



         if(e.target.name==='code'){
            if(e.target.value===''){
                fetch(`https://restcountries.eu/rest/v2/all`)
                .then(response => response.json())
                .then(data => setCountries(data))
              }
              else{
                fetch(`https://restcountries.eu/rest/v2/alpha/${e.target.value}`)
                .then(response => response.json())
                .then(data => setCountries(data))
              }
        }
        if(e.target.name==='currency'){
            
        }
        if(e.target.name==='language'){
            
        }
        if(e.target.name==='capital'){
            
        }
        if(e.target.name==='region'){
            
        }
*/