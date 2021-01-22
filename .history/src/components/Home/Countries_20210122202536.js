import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Countries = ({country}) => {

    const {name,flag,region,subregion} = country;
    return (
          <>
            <Col md={3}>
                <div className='container country-details'>
                    <div className="row border border-success p-2 mb-2">
                         <div className="col-5">
                             <img src={flag} alt={name} className='img-fluid'/>
                         </div>
                         <div className="col-7">
                            <p>{name}</p>
                         </div>
                    </div>
                </div>
            </Col>
          </>
    );
};

export default Countries;