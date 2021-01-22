import React, {useEffect, useState} from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Countries from './Countries';
import axios from 'axios';
const Home = () => {
    const [countries,setCountries] = useState([]);
    const [filterCountries,setFilterCountries] = useState([]);
    const[search,setSearch] = useState('');
    const[code,setCode] = useState('');
    const [capital,setCapital] = useState('');
    const [region,setRegion] = useState('');


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

    // capital search
    useEffect(() =>{
        setFilterCountries(
            countries.filter(
                country=> country.capital.toLowerCase().includes(capital.toLowerCase())
                )
        )
    },[capital,countries])
    
    // region search
    useEffect(() =>{
        setFilterCountries(
            countries.filter(
                country=> country.region.toLowerCase().includes(region.toLowerCase())
                )
        )
    },[region,countries])


    // code
    useEffect(() =>{
        setFilterCountries(
            countries.filter(
                country=> code.length===2 ? country.alpha2Code.toLowerCase().includes(code.toLowerCase()) : country.alpha3Code.toLowerCase().includes(code.toLowerCase())
            )
        )
    },[code,countries])


    const handleChange = async (e) =>{
        if(e.target.name==='currency'){
              if(e.target.value){
                fetch(`https://restcountries.eu/rest/v2/currency/${e.target.value}`).then(response => response.json())
                .then(data =>setFilterCountries(data))
                 .then(error=>console.log(error))
              }
        }
        else if(e.target.name==='language'){
            if(e.target.value){
                try {
                    const response = await axios.get(`https://restcountries.eu/rest/v2/lang/${e.target.value}
                    `);
                    setFilterCountries(response.data)
                  } catch (error) {
                    console.error(error);
                    setFilterCountries([]);
                  }
              }
        }
        else if(e.target.name==='fullName'){
            if(e.target.value){
                try {
                    const response = await axios.get(`https://restcountries.eu/rest/v2/name/${e.target.value}?fullText=true
                    `);
                    setFilterCountries(response.data)
                  } catch (error) {
                    console.error(error);
                    setFilterCountries([]);
                  }
            }
        }
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
                    placeholder="Need Right Name.."
                    onBlur={handleChange}
                />
                <label>CODE</label>
                <input 
                    type="text" 
                    className="form-control " 
                    name="code" 
                    placeholder="Search.."
                    onChange={(e)=>setCode(e.target.value)}
                />
                <label>CURRENCY</label>
                <input 
                    type="text" 
                    className="form-control " 
                    name="currency" 
                    placeholder="currency code.."
                    onBlur={handleChange}
                />
                <label>LANGUAGE</label>
                <input 
                    type="text" 
                    className="form-control " 
                    name="language" 
                    placeholder="Language code.."
                    onBlur={handleChange}
                />
                <label>CAPITAL CITY</label>
                <input 
                    type="text" 
                    className="form-control " 
                    name="capital" 
                    placeholder="Search.."
                    onChange={(e) => setCapital(e.target.value)}
                />
                <label>REGION</label>
                <input 
                    type="text" 
                    className="form-control " 
                    name="region" 
                    placeholder="Search.."
                    onChange={(e)=>setRegion(e.target.value)}
                />
                <Button className="mt-3" variant="outline-primary">Search</Button>
               </div>
               </Col>
           </Row>
        </Container>
    );
};

export default (Home);
/*
 fetch(`https://restcountries.eu/rest/v2/lang/${e.target.value}`).then(response => response.json())
                .then(data =>setFilterCountries(data))
                .then(error=>console.log(error))

*/