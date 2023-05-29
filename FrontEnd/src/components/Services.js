import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'
import Wrapper from '../assets/Wrapper/Services-Home'
const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>
            custom furniture <br/>
            built only for you
          </h3>
          <p>
            To help you get started, here’ s a list of many types of furniture that you need to add to your cart,Culture shapes values.Values determine the future.
          </p>
        </article>
        <div className="services-center">
          {services.map((service)=>{
            const{id, icon, title, text}=service
            return(
              <article key={id} className='service'>
                <span className='icon'>{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}
export default Services
