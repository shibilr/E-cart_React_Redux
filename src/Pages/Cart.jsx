import React from 'react'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <div style={{height:"80vh"}} className='container my-5'>
      <div className="row">
        <h1 className='pt-5 text-primary fw-bold'>User's Cart</h1>
        <div className="col-lg-8 border shadow">
          <table className='table'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mop</td>
                <td><img width={"50px"} height={"50px"} src="https://m.media-amazon.com/images/I/71L0ihEIhDL.jpg" alt="no image" /></td>
                <td>
                  <div className='d-flex'>
                    <button className='btn fs-1'>-</button>
                    <input style={{width:"50px"}} value={10} type="text" className='form-control' readOnly />
                    <button className='btn fs-1'>+</button>

                  </div>
                </td>
                <td>
                  <p>$30</p>
                </td>
                <td>
                  <h3 className='text-danger fs-1 fw-bold'>X</h3>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='d-flex justify-content-evenly'>
          <button className='btn btn-danger'>Empty Cart</button>
          <Link to={'/'} className='btn btn-info ms-5'>Shope more</Link>
        </div>
        </div>
        <div className="col-lg-4">
          <div className="border shadow rounded p-5 text-center">
            <h3>Total Amount : <span className='text-danger'>$300</span></h3>
            <hr />
            <button className='btn btn-success w-75'>CHECK OUT</button>
          </div>
        </div>
        
      </div>

      
    </div>
  )
}

export default Cart
