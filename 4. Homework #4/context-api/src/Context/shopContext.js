import React from 'react';


export default React.createContext({
    products: [],
    cart: [],
    newProducts: [],
    productById: [],
    renderCart: false,
    getProductById: id => {}, 
    addNewProduct: newBook => [],
    addProduct: product => {},
    removeProduct: productId => {}
})