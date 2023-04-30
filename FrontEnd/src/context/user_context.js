import React, { useContext, useEffect, useState, useReducer } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import reducer from '../reducers/user_reducer'

//initialState
const initialState = {
  AlertText:'',
  alertType:''
}

const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
  const [state, dispatch] =useReducer(reducer, initialState)
  return (
    <UserContext.Provider value='user context'>{children}</UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
