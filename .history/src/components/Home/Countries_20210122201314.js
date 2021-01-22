import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Countries = ({country}) => {

    const {name,flag,region,subregion} = country;
    return (
          <Row>
            <Col md={3}>
                <div className='container country-details'>
                    <h1>{name}</h1>
                </div>
            </Col>
          </Row>
    );
};

export default Countries;