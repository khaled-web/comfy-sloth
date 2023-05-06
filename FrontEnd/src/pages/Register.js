//........
//import
//........

import React, {useState, useEffect} from 'react'
import {Logo, FormRow, Alert} from '../components'
import Wrapper from '../assets/Wrapper/RegisterPage'
import {useUserContext} from '../context/user_context'
import { useNavigate } from 'react-router-dom'

//........
//app
//........
const initialState = {
  name:'',
  email:'',
  password:'',
  isMember:true,
}

const Register = () => {
  //useState
  const [values, setValues]=useState(initialState)

  //NavigationAfter(Register, Login)
  const navigate = useNavigate()

  //global state and useNavigate

  const {
    isLoading, 
    showAlert,
    displayAlert, 
    registerUser,
    user
  } = useUserContext()

  //toggleMember
  const toggleMember = ()=>{
    setValues({...values, isMember:!values.isMember})
  }

  //handleChange
  const handleChange = (e)=>{
    setValues({...values, [e.target.name]:e.target.value})
  }

  //onSubmit
  const onSubmit = (e)=>{
    e.preventDefault()
    const{email, password, name, isMember} = values
    if(!email || !password || (!name && !isMember)){
      displayAlert()
      return
    }
    const currentUser = {name, email, password}
    if(isMember){
      console.log('already a member')
    }
    else{
      registerUser(currentUser)
    }
  }

  //UseEffect
  useEffect(()=>{
  if(user){
    setTimeout(()=>{
      navigate('/')
    },3000)
  }
  },[user, navigate])
  //
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo/>
        <h3>{values.isMember?"login":"register"}</h3>
        {/* displayingAlert */}
        {showAlert && <Alert/>}
        {/* name input */}
        {
        !values.isMember&&
        <FormRow type='text' name='name' value={values.name} handleChange={handleChange}/>        
        }
        {/* email input */}
        <FormRow type='email' name='email' value={values.email} handleChange={handleChange}/>
        {/* password input */}
        <FormRow type='password' name='password' value={values.password} handleChange={handleChange}/>
        <button type='submit' className='btn btn-block' disabled={isLoading}>
          submit
        </button>
        <p>
          {values.isMember?"Not a member...":"Already a member? "}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember?"register":"login"}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}


//........
//export
//........

export default Register
