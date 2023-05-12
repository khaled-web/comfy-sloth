import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/products_reducer';
import { products_url as url } from '../utils/constants';
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions';

const initialState = {
  isSidebarOpen: true,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: []
};

//localStorage
const token = localStorage.getItem('token');


const ProductsContext = React.createContext();

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //openSidebar
  const openSidebar = () => {
    dispatch({
      type: SIDEBAR_OPEN
    });
  };
  //closeSidebar
  const closeSidebar = () => {
    dispatch({
      type: SIDEBAR_CLOSE
    });
  };

  //fetchProducts
  const token = localStorage.getItem("token")
  const fetchProducts = async ()=>{
    dispatch({type:GET_PRODUCTS_BEGIN})
    try {      
      const response = await axios.get('http://localhost:5000/api/v1/product',{
        headers:{
          Authorization: 'Bearer ' + token
        }
      })
      const products = response.data.product
      dispatch({
        type:GET_PRODUCTS_SUCCESS,
      payload:products
    })
      console.log(products)
    } catch (error) {
      dispatch({
        type:GET_PRODUCTS_ERROR
      })
    }
  }


  //useEffect
  useEffect(() => {
    fetchProducts(url);
  }, []);


  return (
    <ProductsContext.Provider value={{
      ...state,
      openSidebar,
      closeSidebar,

    }}>
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
const useProductsContext = () => {
  return useContext(ProductsContext);
};

export { ProductsProvider, useProductsContext };
