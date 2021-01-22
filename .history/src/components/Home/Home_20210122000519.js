import React, { useEffect } from 'react';
import { useState } from 'react';
import {api} from '../../constant/api';
const Home = () => {
    const [countries,setCountries] = useState([]);
    
    useEffect(() =>{
         fetch()
    },[])
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

export default Home;