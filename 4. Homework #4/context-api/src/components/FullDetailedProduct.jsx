import React, { useState, useEffect} from 'react';
import { Row, Col, ListGroup, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ShopContext from '../Context/shopContext';

const FullDetailedProduct = (props) => {

    const { isAdd } = props;
    

    return (
        <ShopContext.Consumer>
            {(context) => {

                const productById = context.productById[0];
                //console.log(productById, "Product by ID");
            
                return(
                    <div>
                        {!productById
                        ?   (<div>Loading.....</div>
                        ) : (
                        
                            <>
                                <Link className='btn btn-outline-warning my-3 py-2 text-dark' to='/'>
                                    Go Back
                                </Link>
                                <Row >
                                    <Col md={4}>
                                        <Image src={productById.image} alt={productById.name} rounded fluid/>
                                    </Col>
                                    <Col md={5}>
                                        <ListGroup variant='flush' className='rounded'>
                                            <ListGroup.Item className='rounded'>
                                                <h3>{productById.name}</h3>
                                            </ListGroup.Item>
                                            <hr className='dark' />
                                            
                                            <ListGroup.Item>
                                                <b>Description:</b> {productById.description}
                                            </ListGroup.Item>
                                            
                                        </ListGroup>
                                    </Col>
                                
                                    <Col md={2}>
                                        <ListGroup variant='flush'  className='rounded'>
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>
                                                        Price: 
                                                    </Col>
                                                    <Col>
                                                        <strong>${productById.price}</strong> 
                                                    </Col> 
                                                </Row>
                                            </ListGroup.Item>
                    
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Status:</Col>
                                                    <Col>
                                                        {productById.inStock > 0 ? 'In Stock' : 'Out Of Stock'}
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                    
                                            <ListGroup.Item>
                                                {/* <Button className='btn-block btn-outline-dark text-warning' type='button' disabled={productById.inStock === 0}>ADD TO CART</Button> */}

                                                {
                                                    !isAdd
                                                        ? <button
                                                            disabled={ productById.inStock === 0 }
                                                            className="btn btn-outline-primary"
                                                            onClick={ () => context.addProduct(productById)}
                                                        >
                                                            ADD TO CART
                                                        </button>
                                                        : <button 
                                                            className="btn btn-outline-danger" 
                                                            onClick={ () => context.removeProduct(productById.id)} 
                                                        > 
                                                            REMOVE FROM CART
                                                        </button>
                                                }
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                </Row>
                            
                            </>
                        )}
                    </div>
                ); 
            }}      
        </ShopContext.Consumer>         
    );
}


export default FullDetailedProduct;