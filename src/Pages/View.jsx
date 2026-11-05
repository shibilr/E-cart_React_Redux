
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function View() {
  return (
    <div className='container my-5'>
      <div style={{height:"90vh"}} className="row align-items-center">
        <div className="col-lg-6 text-center">
          <img style={{height:"250px"}} src="https://m.media-amazon.com/images/I/71L0ihEIhDL.jpg" alt="no image" />
          <div className='d-flex justify-content-evenly mt-5'>
            <button className='btn btn-info'>Add to wishlist</button>
            <button className='btn btn-success'>Add to cart</button>
          </div>
        </div>
        <div className="col-lg-6">
          <h3 className='fw-bold'>Title</h3>
          <h2 className='fw-bold'>$37</h2>
          <h4 className='fw-bold'>Brand : </h4>
          <h4 className='fw-bold'>Category : </h4>
          <h4 className='fw-bold'>Description : </h4>
          <h5 className='fw-bold'>Client Review</h5>
          <div className='border rounded shadow p-2 my-5'>
          <p><span className='fw-bolder'>Nicholas Jackson : </span>Message</p>
          <p>Rating : 5<FontAwesomeIcon icon={faStar} className='text-warning'/></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View
