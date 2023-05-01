//...........
//importing
//...........
import React, { useContext, useEffect, useState, useReducer } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import reducer from '../reducers/user_reducer'
import {
 DISPLAY_ALERT,
 CLEAR_ALERT
} from '../actions'




//...........
//App
//...........
//initialState
const initialState = {
  isLoading:false,
  showAlert:false,
  AlertText:'',
  alertType:''
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


  return (
    <UserContext.Provider value={{
      ...state,
      displayAlert,
      clearAlert
    }}>{children}</UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
