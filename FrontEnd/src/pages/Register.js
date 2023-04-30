//........
//import
//........

import React, {useState, useEffect} from 'react'
import {Logo, FormRow, Alert} from '../components'
import Wrapper from '../assets/Wrapper/RegisterPage'

//........
//app
//........
const initialState = {
  name:'',
  email:'',
  password:'',
  isMember:true,
  showAlert:true
}

const Register = () => {
  const [values, setValues]=useState(initialState)
  //global state and useNavigate

  //toggleMember
  const toggleMember = ()=>{
    setValues({...values, isMember:!values.isMember})
  }

  //handleChange
  const handleChange = (e)=>{
    console.log(e.target)
  }
  //onSubmit
  const onSubmit = (e)=>{
    e.preventDefault()
    console.log(e.target)
  }
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo/>
        <h3>{values.isMember?"login":"register"}</h3>
        {/* displayingAlert */}
        {values.showAlert && <Alert/>}
        {/* name input */}
        {
        !values.isMember&&
        <FormRow type='text' name='name' value={values.name} handleChange={handleChange}/>        
        }
        {/* email input */}
        <FormRow type='email' name='email' value={values.name} handleChange={handleChange}/>
        {/* password input */}
        <FormRow type='password' name='password' value={values.password} handleChange={handleChange}/>
        <button type='submit' className='btn btn-block'>
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
