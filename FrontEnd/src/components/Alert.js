import React from 'react'
import {useUserContext} from '../context/user_context'

const Alert = () => {
  const {
    AlertText,
    AlertType
  } = useUserContext()
  return (
    <div div className = {
      `alert alert-${AlertType}`
    } >
      {
        AlertText
      }
    </div>
  )
}

export default Alert 
