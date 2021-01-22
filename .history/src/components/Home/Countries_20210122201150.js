import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Countries = ({country}) => {

    const {name,flag,region,subregion} = country;
    return (
          <Row>
            <Col md={3}>
                <div className='container country-details'>
                    <div className="row">
                         <div className="col-6">
                             <img src={flag} alt={name} className='img-fluid'/>
                         </div>
                         <div className="col-6">

                         </div>
                    </div>
                </div>
            </Col>
          </Row>
    );
};

export default Countries;