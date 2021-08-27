import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import ProductItem from './ProductItem';
import ShopContext from '../Context/shopContext';

class CartList extends Component {
    static contextType = ShopContext;
    render() {
        return (
            <div className="cart">
                <Row>
                    {
                        this.context.cart.map(product => (
                            <ProductItem product={ product } />
                        ))
                    }
                </Row>
            </div>
        );
    }
}

export default CartList;