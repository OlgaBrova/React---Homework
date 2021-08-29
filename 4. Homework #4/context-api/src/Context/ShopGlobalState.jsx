import React, { useState, useEffect, useRef } from 'react';
import ShopContext from '../Context/shopContext';

const ShopGlobalState = props => {

    const [ products, updateProducts ] = useState([]);
    const [ cart, updateCart ] = useState([]);
    const [ newProducts, updateNewProducts ] = useState([]);
    const [ productById, updateProductById ] = useState([]);


    useEffect(() => {
        //COMPONENT DID MOUNT
        getProducts();
        
        const interval = setInterval(() => {
            getProducts();
        }, 6000)
        return () => {
            console.log("COMPONENT WILL UNMOUNT");
            clearInterval(interval);
        }
    },[]);

    useEffect(() => {
        newProductsArray();

    }, [products]);


    useEffect(() => {
        //COMPONENT DID UPDATE
        alert("Cart was updated!");
    }, [cart]);


    const newProductsArray = () => {
        if(products !== []){
            const newArray = [ ...products];
            updateNewProducts(newArray);
        }
    }

    const getProducts = async () => {
        const data = await fetch('https://raw.githubusercontent.com/OlgaBrova/BookShop/main/dataBooks.json');
        const products = await data.json();
        //console.log(products);
        updateProducts(products);
    }

    const getProductById = (id) => {
        if(newProducts !== []){
            const productById = newProducts.filter( product => product.id === id);

            updateProductById(productById);
        }
    }
    
    //console.log(newProducts);
    //console.log(productById);

    const addProduct = product => {
        // const productInStock = products.map(product => [ ...product, {'inStock': product.inStock - 1 }] );

        //const productInStock = {...product, 'inStock':  product.inStock - 1};
        updateCart([...cart, product])
    }
    
    const removeProduct = productId => {
        const filteredProducts = cart.filter(product => product.id !== productId);
        updateCart(filteredProducts);
    }


    return <div>
            <ShopContext.Provider value={ {
                products: products,
                cart: cart,
                newProducts: newProducts,
                productById: productById,
                getProductById: getProductById,
                addProduct: addProduct,
                removeProduct: removeProduct
            } }>
                { props.children }
            </ShopContext.Provider>
        </div>
    
}

export default ShopGlobalState;