import React from 'react'
import styled from 'styled-components'
import Wrapper from '../assets/Wrapper/Contact-Home.js'
const Contact = () => {
  return(
    <Wrapper>
      <div className="section-center">
        <h3>
          Join our newsletter and get 20% off
        </h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis exercitationem pariatur qui doloribus quibusdam.
          </p>
          <form className='contact-form'>
            <input type="email" className='form-input' placeholder='enter email'/>
            <button type='submit' className='submit-btn'>
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
    )
}


export default Contact
