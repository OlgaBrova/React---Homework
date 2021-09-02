import React, { useState, useEffect  } from 'react';
import ShopContext from '../Context/shopContext';

const ShopGlobalState = props => {

    const [ products, updateProducts ] = useState([]);
    const [ cart, updateCart ] = useState([]);
    const [ newProducts, updateNewProducts ] = useState([]);
    const [ productById, updateProductById ] = useState([]);


    useEffect(() => {
        
        getProducts();
       
    },[]);

    useEffect(() => {

        newProductsArray();
         
    }, [products]);


    const newProductsArray = () => {
        if(products !== []){
            //getProducts();
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
        
        if(products !== []){
            const productById = products.filter( product => product.id === id);

            updateProductById(productById);
        }
    }

    const addNewProduct = (newBook) => {
       
        updateNewProducts([...newProducts, newBook]);
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
                addNewProduct: addNewProduct,
                addProduct: addProduct,
                removeProduct: removeProduct
            } }>
                { props.children }
            </ShopContext.Provider>
        </div>
    
}

export default ShopGlobalState;