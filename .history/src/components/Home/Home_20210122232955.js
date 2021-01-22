import React, { useContext} from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { NAME_SEARCH_METHOD } from '../../actions/actions';
import Countries from './Countries';
const Home = (props) => {
    //const [name,setName] = useState('');
   // const [filterCountries,setFilterCountries] = useState([]);
   /* useEffect(() =>{
         fetch(`https://restcountries.eu/rest/v2/all`)
         .then(response => response.json())
         .then(data => setCountries(data))
      },[]);*/
     
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
                        props.countries[0].map((country,index)=> <Countries
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
                    onChange={(e)=>props.nameSearch(e)}
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

const mapStateToProps = (state) =>{
    return({
        countries:state.countries
    })
}
const mapDispatchToProps = (dispatch) =>{
return{
    nameSearch:(e) => dispatch({type:NAME_SEARCH_METHOD,val:e.target.value})
}
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);
