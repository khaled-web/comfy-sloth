import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/Wrapper/PageHeroStyled.js'
const PageHero = ({title,product}) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to='/'>Home</Link>/{product && <Link to='/products'>Products /</Link>} {title}
        </h3>
      </div>
    </Wrapper>
  )
}

export default PageHero
