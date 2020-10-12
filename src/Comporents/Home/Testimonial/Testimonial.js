import React from 'react';
import { Card } from 'react-bootstrap';

const Testimonial = (props) => {
        const {quote,name,from ,img} = props.testimonial;
    return (
        <Card className="card shadow-sm">
            <Card.Body>
                <Card.Title>{quote}</Card.Title>
                <div className="pt-4 d-flex  align-items-center">
                    <Card.Img variant="button" src={img} style={{width :'60px' }}/>
                    <div className="ml-4">
                        <h6 className="text-primary">{name}</h6>
                        <p className="m-0">{from}</p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Testimonial;