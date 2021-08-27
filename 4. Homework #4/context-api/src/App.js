import React, { Component } from 'react';
import ShopGlobalState from './Context/ShopGlobalState';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import Header from './components/Header';
import NewBookForm from './components/NewBookForm';
import FullDetailedProduct from './components/FullDetailedProduct.jsx';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <ShopGlobalState>
          <Router>
            <Header />
            <main className='py-5 mx-5'>
              <Switch>
                <Route path="/" exact component={ ProductList } />
                <Route path="/shop/products" exact component= { ProductList } />
                <Route path="/cart" component={ CartList } />
                <Route path="/addBook" component={ NewBookForm } />
                <Route path="/shop/products/:id" component={ FullDetailedProduct } />
                <Route path="*">
                    <Redirect to="/" />
                </Route>
              </Switch>
            </main>
            
          </Router>
          </ShopGlobalState>


     
    // {/* <div className="App">
    //     <Header />
    //     <Shop />
    // </div> */}
  );
}

export default App;
