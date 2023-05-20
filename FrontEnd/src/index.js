import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <React.StrictMode> 
 <UserProvider>
 <FilterProvider>
  <App/>
 </FilterProvider>
 </UserProvider>
 </React.StrictMode>
);


 // <React.StrictMode> 
 // <UserProvider>
 //  <ProductsProvider>
 //   <FilterProvider>
 //    <CartProvider>
 //     <App/>
 //    </CartProvider>
 //   </FilterProvider>
 //  </ProductsProvider>
 // </UserProvider>
 // </React.StrictMode>
