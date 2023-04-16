import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'
import Wrapper from '../assets/Wrapper/AboutStyledPage'

const AboutPage = () => {
  return(
  <main>
    <PageHero title="about"/>
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt="nice desk"/>
      <article>
        <div className="title">
          <h2>our story</h2>
          <div className="underline"></div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deserunt excepturi, praesentium maiores doloribus incidunt dolor ullam ex quos sapiente velit voluptates, blanditiis repudiandae laboriosam tempore cumque perferendis delectus explicabo autem suscipit consectetur illum accusantium modi? Modi fugit eveniet facere architecto possimus impedit autem dolor tempore recusandae. Non ab quod numquam ipsum laboriosam reiciendis dolor, dolorum laborum quae dicta nihil eum dolore eos repudiandae voluptatum amet deleniti alias obcaecati placeat minima. Officiis inventore minima voluptates et similique autem quas, nesciunt ex facere dignissimos vitae quaerat earum ipsam cum consequuntur porro sint debitis. Minus nostrum accusamus provident maxime. Eveniet, recusandae omnis?</p>
      </article>
    </Wrapper>
  </main>
  ) 
}
export default AboutPage
