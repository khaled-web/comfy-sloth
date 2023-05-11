//...........
//importing
//...........
import React, { useContext, useEffect, useState, useReducer } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import reducer from '../reducers/user_reducer'
import {
 DISPLAY_ALERT,
 CLEAR_ALERT,
 REGISTER_USER_BEGIN,
 REGISTER_USER_SUCCESS,
 REGISTER_USER_ERROR,
 LOGIN_USER_BEGIN,
 LOGIN_USER_SUCCESS,
 LOGIN_USER_ERROR,
 LOGOUT_USER
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
  isLoading:false,
  showAlert:false,
  AlertText:'',
  AlertType:'',
  user:user?JSON.parse(user):null,
  token:token,
  userRole:Role
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
      const response = await axios.post('http://localhost:5001/api/v1/auth/login', currentUser)
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


  return (
    <UserContext.Provider value={{
      ...state,
      displayAlert,
      clearAlert,
      registerUser,
      loginUser,
      logoutUser
    }}>{children}</UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
