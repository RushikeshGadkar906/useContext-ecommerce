import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Product from "./Product";
import SingleProduct from './SingleProduct';
import Cart from './Cart';
import ErrorPage from "./ErrorPage";
import Header from "./component/Header";
import './App.css'
// import {GlobalStyle} from './GlobalStyle';
// import { ThemeProvider } from "styled-components";
const App = () => {


  return (
    
    // <ThemeProvider theme={theme}>
       <Router >
        <Header />
        {/* <GlobalStyle /> */}
         <Routes >
            <Route  path="/" element={<Home />} />
            <Route  path="/about" element={<About />} />
            <Route  path="/products" element={<Product />} />
            <Route  path="/contact" element={<Contact />} />
            <Route  path="/singleproduct/:id" element={<SingleProduct />} />
            <Route  path="/cart" element={<Cart />} />
            <Route  path="*" element={<ErrorPage />} />
         
         </Routes>
       </Router>
      //  </ThemeProvider>
    
  );
};

export default App;
