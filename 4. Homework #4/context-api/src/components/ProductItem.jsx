import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ShopContext from '../Context/shopContext';

function ProductItem(props) {
    const { product, isDisabled, isAdd } = props;
    return (
        <ShopContext.Consumer>
            {
                (context) => (
                    <Col className="my-2" key={product.id} sm={12} md={6} lg={4} xl={3}>

                        <Card className='card h-100 my-3 mx-1 p-1 rounded'>
                            <Link to={`/shop/products/${product.id}`}>
                                <Card.Img  className="card-img" style={{ width: '100%' }} src={product.image} variant='top' onClick={() => context.getProductById(product.id)}  />
                            </Link>

                            <Card.Body>
                                <Card.Title as='h5' id="cardTitle">
                                    <strong>{product.name}</strong>{product.published}
                                </Card.Title>
                    
                                <Card.Text as='div' className='my-1'>
                                    <p>By {product.authorName}</p>
                                </Card.Text>

                                <Card.Text as='h4' id='priceText'>Price: ${product.price}</Card.Text>   
                            </Card.Body>

                            <Card.Body className='py-0'>
                                <Card.Text as='p' >{product.inStock > 0 ? 'In Stock' : 'Out Of Stock'} </Card.Text>

                                {
                                    isAdd
                                        ? <button
                                            disabled={ product.inStock === 0 }
                                            className="btn btn-outline-primary"
                                            onClick={ () => context.addProduct(product)}
                                        >
                                            ADD TO CART
                                        </button>
                                        : <button 
                                            className="btn btn-outline-danger" 
                                            onClick={ () => context.removeProduct(product.id)} 
                                        > 
                                            REMOVE FROM CART
                                        </button>
                                }
                            </Card.Body>
                                
                        </Card>
                    </Col>
                )
            }
            
        </ShopContext.Consumer>
        
    );
}

ProductItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        price: PropTypes.number,
        image: PropTypes.string,
        title: PropTypes.string
    }).isRequired,
    addProduct: PropTypes.func,
    removeProduct: PropTypes.func
}

export default ProductItem;