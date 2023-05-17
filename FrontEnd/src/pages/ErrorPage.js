import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/Wrapper/Error.js'
import {Navbar, Sidebar, Footer} from '../components'
const ErrorPage = () => {
  return(
    <Wrapper className='page-100'>
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link Link to = '/'
        className = 'btn' >
          Back Home
        </Link>
      </section>
    </Wrapper>
  )
}


export default ErrorPage
