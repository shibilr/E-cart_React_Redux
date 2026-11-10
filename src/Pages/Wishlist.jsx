import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Card from 'react-bootstrap/Card';
import Header from '../Components/Header'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Wishlist() {
  const userWishlist = useSelector(state=>state.WishlistReducer)
  return (
    
    <>
    <Header/>
      <div className='container my-5'>
        {
          userWishlist?.length>0?
          <>
          <h1 className='pt-5 text-primary fw-bold'>User's Wishlist</h1>
         <div className="row pt-4">
                  {/* Duplicate column according to products */}
                  {
                    userWishlist?.map(item=>(
                      <div className="col-3">
                      {/* cards */}
                      <Card className='shadow p-2'>
                          <Card.Img style={{height:"250px"}} variant="top" src={item?.thumbnail} />
                          <Card.Body className='text-center'>
                              <Card.Title>{item?.title}</Card.Title>            <div className='d-flex justify-content-evenly'>
                                <button className='btn text-danger  fs-4'><FontAwesomeIcon icon={faHeartCircleXmark} /></button>
                                <button className='btn text-success  fs-4'><FontAwesomeIcon icon={faCartPlus} /></button>
                                </div>          
                          </Card.Body>
                      </Card>
                  </div>
                    ))
                  }
              </div>
          </>
          :
          <div className='d-flex justify-content-center align-items-center flex-column'>
            <img className='img-fluid' src="https://tse4.mm.bing.net/th/id/OIP.prOqV5Pj2H_31jmHhbzgxgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
            <h1>Your wishlist is empty</h1>
            <Link to={'/'} className='btn btn-primary'>Add more</Link>
          </div>
         

        }
      </div>
    </>
  )
}

export default Wishlist
