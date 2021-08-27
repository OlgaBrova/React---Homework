import React, { Component } from 'react';
import { Row, Container } from 'react-bootstrap';
import ProductItem from './ProductItem';
import CartList from './CartList';
import ShopContext from '../Context/shopContext';

class ProductList extends Component {
    static contextType = ShopContext;

    constructor(props) {
        super(props);

        this.state={
            renderCart: false
        }
    }

    handleRenderCart = () => {
        if (this.state.renderCart) {
            this.setState({
                renderCart: false
            })

        } else {
            this.setState({
                renderCart: true
            }, 
            () => console.log(this.renderCart))
        }
    }

    render() {
        return (
            <>
                <div className="products">
                    <Container>
                        <Row>
                            {
                                this.context.newProducts.map(product => {
                                    const productDisabled = this.context.cart.some(item => item.id === product.id)
                                    return <ProductItem
                                        product={ product }
                                        
                                        isAdd={ true }
                                    />
                                })
                            }
                        </Row>
                    </Container>      
                </div>


                {this.context.newProducts.length > 0 &&
                    <>
                        <div className="h3Cart">
                            <h3>
                                Total price: { this.context.cart.reduce((total, curr) => total + curr.price, 0)}
                            </h3>
                            <h3 >
                                Items on Cart: { this.context.cart.length}
                            </h3>
                        </div>

                        <button type="button" 
                            className="btn btn-secondary" 
                            id="btnCart" 
                            style={ 
                                this.state.renderCart 
                                    ? { background: '#fd8181'} 
                                    : { background: '#56af44'}
                                } 
                            onClick={this.handleRenderCart} 
                            > {this.state.renderCart ? 'HIDE CART ITEMS' : 'SHOW CART ITEMS' } 
                        </button>

                        {this.state.renderCart &&
                        <CartList />
                        }
                    </>
                }

            </>
        );
    }
}

export default ProductList;