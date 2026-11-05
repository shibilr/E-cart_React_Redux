import { faHeart, faTruck } from '@fortawesome/free-regular-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
Badge

function Header() {
  return (
    <Navbar expand="lg" className="bg-primary fixed-top">
      <Container>
        <Navbar.Brand><Link to={"/"} className='text-light text-decoration-none fw-bold'><FontAwesomeIcon icon={faTruck} className='me-2' />E-cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <input type="text" className='form-control' placeholder='Search your Products'/>
            </Nav.Item>
            <Link to={'/wishlist'} className='text-light text-decoration-none fw-bold ms-5'><FontAwesomeIcon icon={faHeart} className='btn btn-danger me-2'/>Wishlist<Badge pill bg="secondary">1</Badge></Link>
            <Link to={'/cart'} className='text-light text-decoration-none fw-bold ms-5'><FontAwesomeIcon icon={faCartPlus} className='btn btn-success me-2'/>Cart<Badge pill bg="secondary">1</Badge></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
