import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/hero-bcg.jpeg'
import heroBcg2 from '../assets/hero-bcg-2.jpeg'
import Wrapper from '../assets/Wrapper/Hero-Home'
const Hero = () => {
  return <Wrapper className='section-center'>
    <article className="content">
      <h1>
        design your <br/>
        comfort zone
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iste facilis dignissimos similique autem nam ad molestias sint animi? Vero.
      </p>
      <Link to='/products' className='btn hero-btn'>
        show now
      </Link>
    </article>
    <article className='img-container'>
      <img src={heroBcg} alt="nice table" className='main-img'/>
      <img src={heroBcg2} alt="person working" className='accent-img'/>
      

    </article>
  </Wrapper>
}



export default Hero
