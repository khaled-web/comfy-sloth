import React from 'react'
import styled from 'styled-components'
import {
  PageHero,
  Navbar,
  Sidebar,
  Footer
} from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'
import Wrapper from '../assets/Wrapper/AboutStyledPage'

const AboutPage = ()=>{
  return ( 
  <main>
    <Navbar/>
    <Sidebar/>
    <PageHero title = "about"/>
    <Wrapper className = 'page section section-center' >
    <img src = {aboutImg} alt = "nice desk"/>
    <article >
    <div className = "title" >
    <h2> our story </h2> 
    <div className="underline"> 
    </div> 
    </div> 
    <p>
      we have a new vision to make the best of anything that they build as furniture because The design creates culture.Culture shapes values.Values determine the future.“To create a better everyday life for the many people.” This vision goes beyond home furnishing. We want to have a positive impact on the world – from the communities where we source our raw materials to the way our products help our customers live a more sustainable life at home.

      By sharing what we do, and speaking up for what we believe in, we can be part of positive change in society.
    </p> 
    </article> 
    </Wrapper>
    <Footer/>
    </main>
  )
}
export default AboutPage