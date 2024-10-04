import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Product from './components/Products/Products';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer'
// import Header from './components/Header/Header'
import './style/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    {/* <Header/> */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/product' element={<Product />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/card" element={<Card />} />
    </Routes>
    <Footer />
  </Router>

); 