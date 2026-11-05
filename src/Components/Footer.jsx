import { faFacebookF, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faTruck } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Footer() {
  return (
   <div style={{backgroundColor:'#0b8399',height:'300px'}} className='container-fluid text-light p-5'>
    <div className='container-row d-flex'>
    <div className="col-lg-3">
      <h3><b><FontAwesomeIcon icon={faTruck} className='me-1' />DailyCart</b></h3>
      <p>Designed and built with all the love in the world by the Luminar team with the help of our contributions.</p>

      <p>Code licensed Luminar,docs CC BY 3.0</p>

      <p>Currently v5.3.2.</p>
    </div>
    <div className="col-lg-3 mx-2">
      <h3><b>Links</b></h3>
      <p>Home</p>
      <p>Wishlist</p>
      <p>Cart</p>
    </div>
    <div className="col-lg-3">
      <h3><b>Guides</b></h3>
      <p>React</p>
      <p>React Bootstrap</p>
      <p>React Router</p>
    </div>
    <div className="col-lg-3">
      <h3><b>Contact Us</b></h3>
      <div className='d-flex align-items-center'><input type="text" className='form-control w-75' placeholder='Email here' /><FontAwesomeIcon className='mx-3' icon={faArrowRight} /></div>
      <div className='d-flex gap-3 my-3'>
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faWhatsapp} />
        <FontAwesomeIcon icon={faEnvelope} />
        <FontAwesomeIcon icon={faPhone} />
      </div>
    </div>
    </div>
    <b><p className='text-center'>Copyright &copy; July 15 Batch,Daily Cart,Built with React Redux</p></b>
   </div>
  )
}

export default Footer
