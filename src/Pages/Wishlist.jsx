import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Card from 'react-bootstrap/Card';

function Wishlist() {
  return (
    <div className='container my-5'>
      <h1 className='pt-5 text-primary fw-bold'>User's Wishlist</h1>
       <div className="row pt-4">
                {/* Duplicate column according to products */}
                <div className="col-3">
                    {/* cards */}
                    <Card className='shadow p-2'>
                        <Card.Img style={{height:"250px"}} variant="top" src="https://m.media-amazon.com/images/I/71L0ihEIhDL.jpg" />
                        <Card.Body className='text-center'>
                            <Card.Title>Mop</Card.Title>            <div className='d-flex justify-content-evenly'>
                              <button className='btn text-danger  fs-4'><FontAwesomeIcon icon={faHeartCircleXmark} /></button>
                              <button className='btn text-success  fs-4'><FontAwesomeIcon icon={faCartPlus} /></button>
                              </div>          
                        </Card.Body>
                    </Card>
                </div>
            </div>
    </div>
  )
}

export default Wishlist
