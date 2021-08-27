import React, { useState, useEffect} from 'react';
import { Row, Col, ListGroup, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ShopContext from '../Context/shopContext';

const FullDetailedProduct = (props, { match }) => {

    //Ovde imam problem, ne mozam od ShopGlobalState da ja dobijam nizata newProducts za vo nea da gi dodavam novo kreiranite knigi.
    
    const { productById } = props;
    

    return (
        <ShopContext.Consumer>
            {(context) => (
                <div>
                {
                    !productById
                        ? <div>Loading.....</div>
                        : 
                        
                        <>
                            <Link className='btn btn-outline-warning my-3 py-2 text-dark' to='/'>
                                Go Back
                            </Link>
                            <Row>
                                <Col md={6}>
                                    <Image src={productById[0].image} alt={productById[0].name} rounded fluid/>
                                </Col>
                                <Col md={3}>
                                    <ListGroup variant='flush' className='rounded'>
                                        <ListGroup.Item className='rounded'>
                                            <h3>{productById[0].name}</h3>
                                        </ListGroup.Item>
                                        <hr className='dark' />
                                        
                                        <ListGroup.Item>
                                            <b>Description:</b> {productById[0].description}
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
                                                    <strong>${productById[0].price}</strong> 
                                                </Col> 
                                            </Row>
                                        </ListGroup.Item>
                
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Status:</Col>
                                                <Col>
                                                    {productById[0].inStock > 0 ? 'In Stock' : 'Out Of Stock'}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                
                                        <ListGroup.Item>
                                            <Button className='btn-block btn-outline-dark text-warning' type='button' disabled={productById[0].inStock === 0}>ADD TO CART</Button>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>
                        
                        </>
                    }
                </div>
            )}
        
                    
        </ShopContext.Consumer>
                
    );
}




// import React, { Component } from 'react';
// import { Row, Col, ListGroup, Image, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import ShopContext from '../Context/shopContext';

// class FullDetailedProduct extends Component {
//     static contextType = ShopContext;

//     constructor(props) {
//         super(props);
//         this.state={
//             productById: []
//         }
//     }

//     //DO OVDE SUM, KAKO DA DOJDAM DO NEWPRODUCTS NIZATA OD CONTEXT
//     // this.context.newProducts.map(product => product.id === this.props.match.params.id)

//     componentDidMount() {
//         //const { productId } = this.props.match.params;

//         //TOCEN CONSOLE.LOG, DAVA TOCNO ID OD PARAMS!!! 
//         console.log(this.props.match.params.id);
//         //this.fetchProducts();
//     }

//     fetchProducts = async () => {
//         const { data } = await fetch(`/shop/products/${this.props.match.params.id}`)
//         //const bookById = await this.context.newProducts.find(productById => productById.id === productId)
//        //////// TREBA DA PROBAM SO EVENT TARGET ID 
//         this.setState({
//             product: data
//         })
        
//     }

//     render() {
//         const { productById } = this.props;
        
//         return (
//             <div>
//                 {
//                     !productById
//                         ? <div>Loading.....</div>
//                         : 
                        
//                         <>
//                         <Link className='btn btn-outline-warning my-3 py-2 text-dark' to='/'>
//                             Go Back
//                         </Link>
//                         <Row>
//                             <Col md={6}>
//                                 <Image src={productById[0].image} alt={productById.name} rounded fluid/>
//                             </Col>
//                             <Col md={3}>
//                                 <ListGroup variant='flush' className='rounded'>
//                                     <ListGroup.Item className='rounded'>
//                                         <h3>{productById.name}</h3>
//                                     </ListGroup.Item>
//                                     <hr className='dark' />
                                    
//                                     <ListGroup.Item>
//                                         <b>Description:</b> {productById.description}
//                                     </ListGroup.Item>
                                    
//                                 </ListGroup>
//                             </Col>
            
//                             <Col md={2}>
//                                 <ListGroup variant='flush'  className='rounded'>
//                                     <ListGroup.Item>
//                                         <Row>
//                                             <Col>
//                                                 Price: 
//                                             </Col>
//                                             <Col>
//                                                 <strong>${productById.price}</strong> 
//                                             </Col> 
//                                         </Row>
//                                     </ListGroup.Item>
            
//                                     <ListGroup.Item>
//                                         <Row>
//                                             <Col>Status:</Col>
//                                             <Col>
//                                                 {productById.inStock > 0 ? 'In Stock' : 'Out Of Stock'}
//                                             </Col>
//                                         </Row>
//                                     </ListGroup.Item>
            
//                                     <ListGroup.Item>
//                                         <Button className='btn-block btn-outline-dark text-warning' type='button' disabled={productById.inStock === 0}>ADD TO CART</Button>
//                                     </ListGroup.Item>
//                                 </ListGroup>
//                             </Col>
//                         </Row>
                        
//                     </>
                        
                        
                        
                        
//                         // <div className="card product-card">
//                         //         <img className="card-img-top" src={ product.image } alt="Product" />
//                         //         <div className="card-body">
//                         //             <h2 className="card-text">{ product.title }</h2>
//                         //             <p className="card-text">Price: { product.price }</p>
//                         //             <p className="card-text">Category: { product.category }</p>
//                         //             <p className="card-text">Description: { product.description }</p>
//                         //         </div>
//                         //     </div>
//                 }
//             </div>
//         );
//     }
// }

export default FullDetailedProduct;