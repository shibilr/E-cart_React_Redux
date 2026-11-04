import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Products() {
    return (
        <div className='m-5'>
            <div className="row pt-4">
                {/* Duplicate column according to products */}
                <div className="col-3">
                    {/* cards */}
                    <Card className='shadow p-2'>
                        <Card.Img style={{height:"250px"}} variant="top" src="https://m.media-amazon.com/images/I/71L0ihEIhDL.jpg" />
                        <Card.Body className='text-center'>
                            <Card.Title>Mop</Card.Title>
                          <Link to={`/products/:id`} className='btn btn-primary'>View More</Link>                      
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Products
