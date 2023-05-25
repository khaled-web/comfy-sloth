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
import Wrapper from '../assets/Wrapper/CartPageStyled'

const CartPage = () => {
  const {cart} = useCartContext()
  if(cart.length<1){
    return (
    <Wrapper>
      <Navbar/>
      <Sidebar/>
      <div className="empty page-100">
        <h2>Your cart is empty</h2>
        <Link to='/products' className='btn'>
          fill it
        </Link>
      </div>
      <Footer/>
    </Wrapper>
    )
  }
  return (
    <main>
      <Navbar/>
      <Sidebar/>
      <PageHero title='cart'/>
      <Wrapper className='page'>
      <CartContent/>
      </Wrapper>
      <Footer/>
    </main>
  )
}


export default CartPage