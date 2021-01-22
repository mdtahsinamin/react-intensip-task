import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Countries = ({country}) => {

    const {name,flag,region,subregion} = country;
    return (
          <>
            <Col md={3}>
                <div className='container country-details'>
                    <div className="row">
                         <div className="col-4">
                             <img src={flag} alt={name} className='img-fluid'/>
                         </div>
                         <div className="col-4">
                            <h4>{name}</h4>
                            
                         </div>
                    </div>
                </div>
            </Col>
          </>
    );
};

export default Countries;