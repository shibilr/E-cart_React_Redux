import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../redux/slices/productSlice';
import Header from '../Components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';

function Products() {
    const { loading, allProducts, error } = useSelector(state => state.productReducer)

    const dispatch = useDispatch()

    const [currentPage,setCurrentPage] = useState(1)
    const productPerPage = 8
    const totalPages = Math.ceil(allProducts?.length/productPerPage)
    const currentPageLastIndex = currentPage * productPerPage
    const currentPageFirstIndex = currentPageLastIndex - productPerPage
    const visibleProductArray = allProducts?.slice(currentPageFirstIndex,currentPageLastIndex)

    const navigateNextPage = () => {
        currentPage != totalPages && setCurrentPage(currentPage+1)
    }
    const navigatePrevPage = () => {
        currentPage !=1 && setCurrentPage(currentPage-1)
    }

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    return (
        <>
        <Header insideProduct/>
            <div className='m-5'>
                {
                    loading ?
                        <div className='text-center py-5 fw-bolder'>
                            Loading...
                        </div>
                        :
                        <div className="row pt-4">
                            {/* Duplicate column according to products */}
                            {
                                allProducts.length > 0 ?
                                    visibleProductArray.map(product => (
                                        <div key={product?.id} className="col-3">
                                            {/* cards */}
                                            <Card className='shadow p-2'>
                                                <Card.Img style={{ height: "250px" }} variant="top" src={product?.
                                                    thumbnail} />
                                                <Card.Body className='text-center'>
                                                    <Card.Title>{product?.title}</Card.Title>
                                                    <Link to={`/products/${product?.id}`} className='btn btn-primary'>View More</Link>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    ))
                                    :
                                    <div className='fw-bolder'>No Products found</div>
                            }
                        </div>
                }
                <div className='text-center my-5 fw-2'>
                    <button onClick={navigatePrevPage} className='btn'><FontAwesomeIcon icon={faBackward} /></button>
                    {currentPage} of {totalPages}
                    <button onClick={navigateNextPage} className='btn'><FontAwesomeIcon icon={faForward} /></button>
                </div>
            </div>
        </>
       
    )
}

export default Products
