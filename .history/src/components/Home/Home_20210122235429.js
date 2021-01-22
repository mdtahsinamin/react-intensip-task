import React, {useEffect, useState} from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Countries from './Countries';
const Home = (props) => {
    const [countries,setCountries] = useState([]);
    const [filterCountries,setFilterCountries] = useState([]);
    const[search,setSearch] = useState('');
    const[fullName,setFullName] = useState('');

    // all countries
    useEffect(() =>{
         fetch(`https://restcountries.eu/rest/v2/all`)
         .then(response => response.json())
         .then(data => setCountries(data))
      },[]);
    
    // partial search 
    useEffect(() =>{
        setFilterCountries(
            countries.filter(
                country=> country.name.toLowerCase().includes(search.toLowerCase())
                )
        )
    },[search,countries])
    
   /* // full Name
    useEffect(() =>{
        fetch(`https://restcountries.eu/rest/v2/name/${fullName}?fullText=true`)
        .then(response => response.json())
        .then(data => filterCountries(data))
     },[]);*/
    
    const handleBlr = () =>{
         fetch(`https://restcountries.eu/rest/v2/name/${fullName}?fullText=true`)
        .then(response => response.json())
        .then(data => filterCountries(data))
    }



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
                 <h5>Filter Methods :</h5>
                <label>NAME</label>
                <input 
                    type="text" 
                    className="form-control " 
                    name="name" 
                    placeholder="Search.."
                    onChange={(e)=>setSearch(e.target.value)}
                />
                <label>FULL NAME</label>
                <input 
                    type="text" 
                    className="form-control " 
                    name="fullName" 
                    placeholder="Search.."
                    onBlur={(e)=>setFullName(e.target.value)}
                />
                <label>CODE</label>
                <input 
                    type="text" 
                    className="form-control " 
                    name="code" 
                    placeholder="Search.."
                    //onChange={handleChange}
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

export default (Home);
