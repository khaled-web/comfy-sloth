import React from 'react'
import {Navigate} from 'react-router-dom'
import {useUserContext} from '../context/user_context.js'

const ProtectedRoute = ({children}) => {
 const {user} = useUserContext()
 if(!user){
  return <Navigate to='/landingPage'/>
 }
  return children
}

export default ProtectedRoute
