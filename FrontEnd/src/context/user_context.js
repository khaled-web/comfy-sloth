//...........
//importing
//...........
import React, { useContext, useEffect, useState, useReducer } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import reducer from '../reducers/user_reducer'
import {
  //user
 DISPLAY_ALERT,
 CLEAR_ALERT,
 REGISTER_USER_BEGIN,
 REGISTER_USER_SUCCESS,
 REGISTER_USER_ERROR,
 LOGIN_USER_BEGIN,
 LOGIN_USER_SUCCESS,
 LOGIN_USER_ERROR,
 LOGOUT_USER,
 //product
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'
import axios from 'axios'


//...........
//App
//...........

//localStorage
const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const Role = localStorage.getItem('userRole')


//initialState
const initialState = {
  //user
  isLoading:false,
  showAlert:false,
  AlertText:'',
  AlertType:'',
  user:user?JSON.parse(user):null,
  token:token,
  userRole:Role,
  //product
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading:false,
  single_product_error: false,
  single_product: {},
}

const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
  const [state, dispatch] =useReducer(reducer, initialState)

  //displayAlert
  const displayAlert = ()=>{
    dispatch({type:DISPLAY_ALERT})
    clearAlert()
  }

  //clearAlert
  const clearAlert = ()=>{
    setTimeout(()=>{
      dispatch({type:CLEAR_ALERT})
    }, 3000)
  }

  //addUserToLocalStorage
  const addUserToLocalStorage = ({user, token, userRole})=>{
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
    localStorage.setItem('userRole', userRole)
  }

  //removeUserFromLocalStorage
  const removeUserFromLocalStorage = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('userRole')
  }

  //registerUser
  const registerUser = async (currentUser)=>{
    dispatch({type:REGISTER_USER_BEGIN})
    try {
      const response = await axios.post('http://localhost:5001/api/v1/auth/register',currentUser)
      console.log(response)
      const {token,tokenUser} = response.data
      dispatch({
        type:REGISTER_USER_SUCCESS,
        payload:{token,tokenUser}
      })
      //localStorageLater
      addUserToLocalStorage({
        user:tokenUser.name,
        token:token,
        userRole:tokenUser.role
      })
    } catch (error) {
      dispatch({
        type:REGISTER_USER_ERROR, 
        payload:{
          msg:error.response.data.msg
        }})
    }
    clearAlert()
  }

  //loginUser
  const loginUser = async (currentUser)=>{
    dispatch({type:LOGIN_USER_BEGIN})
    try {
      const response = await axios.post('http://localhost:5000/api/v1/auth/login', currentUser)
      console.log(response)
      const {token, tokenUser} = response.data
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload:{token, tokenUser}
      })
      addUserToLocalStorage({
        user:tokenUser.name,
        token:token,
        userRole:tokenUser.role
      })
    } catch (error) {
        dispatch({
      type:LOGIN_USER_ERROR, 
        payload:{
          msg:error.response.data.msg
        }})
      console.log(error)
    }
    clearAlert()
  }

  //logoutUser
  const logoutUser = ()=>{
    dispatch({type:LOGOUT_USER})
    removeUserFromLocalStorage()
  }

  //openSidebar
  const openSidebar = () => {
    dispatch({
      type: SIDEBAR_OPEN
    });
    try {
      
    } catch (error) {
      dispatch({type:GET_SINGLE_PRODUCT_ERROR})
    }
  };
  //closeSidebar
  const closeSidebar = () => {
    dispatch({
      type: SIDEBAR_CLOSE
    });
  };

  //fetchProduct
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

  //fetchSingleProduct
  const fetchSingleProduct = async (id)=>{
    dispatch({type:GET_SINGLE_PRODUCT_BEGIN})
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/product/${id}`,{
        headers:{
          Authorization: 'Bearer ' + token
        }
      })
      const singleProduct = response.data.product
      dispatch({type:GET_SINGLE_PRODUCT_SUCCESS,payload:singleProduct})
    } catch (error) {
      dispatch({type:GET_SINGLE_PRODUCT_ERROR})
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <UserContext.Provider value={{
      ...state,
      displayAlert,
      clearAlert,
      registerUser,
      loginUser,
      logoutUser,
      openSidebar,
      closeSidebar,
      fetchSingleProduct
    }}>{children}</UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
