import React from 'react';


export default React.createContext({
    products: [],
    cart: [],
    newProducts: [],
    productById: [],
    renderCart: false,
    getProductById: id => {}, 
    addProduct: product => {},
    removeProduct: productId => {}
})