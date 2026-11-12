
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addCart } from '../redux/slices/cartSlice'

function View() {

  const {id} = useParams()
  console.log(id);
  const {allProducts} = useSelector(state=>state.productReducer)
  const [product,setProduct] = useState({})
  const userWishlist = useSelector(state=>state.WishlistReducer)
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  console.log(userWishlist);
  
  useEffect(()=>{
    setProduct(allProducts?.find(item=>item.id==id))
  },[])
  // console.log(product);

const handleWishlist = ()=>{
  // check the product already in the wishlist
  const existingItem = userWishlist?.find(item=>item?.id==product?.id)
  if(existingItem){
    Swal.fire({
      title:"Sorry",
      text:"You already added this item",
      icon:"error",
      confirmButtonText:"ok"
    })

  }else{
    dispatch(addToWishlist(product))
  }
}


const handleCart = ()=>{
  // check the product already in the Cart
  const existingItem = userCart?.find(item=>item?.id==product?.id)
  dispatch(addCart(product))
  Swal.fire({
    title:"Success",
    text:existingItem?`${existingItem.title} quantity incremented` : "Product added to your cart",
    icon:"Success",
    confirmButtonText:"Ok"
  })
}

  return (
    <>
    <Header/>
      <div className='container my-5 pt-5'>
        <div className="row align-items-center">
          <div className="col-lg-6 text-center">
            <img className='img-fluid' src={product?.thumbnail} alt="no image" />
            <div className='d-flex justify-content-evenly mt-5'>
              <button onClick={handleWishlist} className='btn btn-info'>Add to wishlist</button>
              <button onClick={handleCart} className='btn btn-success'>Add to cart</button>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className='fw-bold'>{product?.title}</h3>
            <h2 className='fw-bold'>${product?.price}</h2>
            <h4 className='fw-bold'>Brand : {product?.brand}</h4>
            <h4 className='fw-bold'>Category :{product?.category} </h4>
            <h4 className='fw-bold'>Description :{product?.description} </h4>
            <h5 className='fw-bold'>Client Review</h5>
            {
              product?.reviews?.map((item,index)=>(
                <div key={index} className='border rounded shadow p-2 my-5'>
            <p><span className='fw-bolder'>Name :{item?.reviewerName} </span>{item?.comment}</p>
            <p>Rating : {item?.rating}<FontAwesomeIcon icon={faStar} className='text-warning'/></p>
            </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
   
  )
}

export default View
