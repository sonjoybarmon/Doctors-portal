import React from 'react';
import { Card } from 'react-bootstrap';

const BlogPost = (props) => {
    const {title, description, author, authorImg , date} = props.blog;

    const cardText = {
        fontSize: '17px',
        lineHeight: '25px'
    }
    return (
        <div className='col-md-4'>
            <Card style={{ background:'#FFFFFF' , boxShadow:'1px 1px 3px gray', marginTop: '50px' }}>
                <Card.Body>
                    <div className='d-flex align-items-center'>
                        <div style={{ width: '100px'}}>
                            <Card.Img variant="top" src={authorImg} style={{ width: '60px'}} />
                        </div>
                        <div>
                            <Card.Title>
                                {author}  
                            </Card.Title>
                            <Card.Title>{date}</Card.Title>
                        </div>
                    </div>
                    <div>
                        <Card.Text className='mt-3'>
                            <h4>{title}</h4>  
                        </Card.Text>
                        <Card.Text style={{cardText}} className="card-text text-secondary mt-4">
                            {description}
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default BlogPost;