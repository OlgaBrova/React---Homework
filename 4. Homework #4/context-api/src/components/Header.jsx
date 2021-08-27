import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="light" variant='light' expand="lg" id='navbarColor' collapseOnSelect>
                <Container id="header">
                    <LinkContainer to='/'>
                    <Navbar.Brand>Book Store</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <LinkContainer to='/cart'>
                                <Nav.Link><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/addBook'>
                                <Nav.Link><i className='fas fa-shopping-cart'></i> Add New Book</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/login'>
                                <Nav.Link><i className='fas fa-user'></i> Sign In</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



            {/* <Navbar bg="light" variant='light' expand="lg" id='navbar' collapseOnSelect>
                <Container id="header">
                   
                    Book Store
        
                </Container>
            </Navbar> */}
        </header>
    )
}

export default Header;
