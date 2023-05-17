import React from 'react'
import styled from 'styled-components'
import {
  useCartContext
} from '../context/cart_context'
import {
  Link
} from 'react-router-dom'
import {
  CartContent,
  PageHero,
  Navbar,
  Sidebar,
  Footer
} from '../components'

const CartPage = () => {
  return (
    <main>
      <Navbar/>
      <Sidebar/>
      <h1>cartPage</h1>
      <Footer/>
    </main>
  )
}

const Wrapper = styled.main `
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default CartPage