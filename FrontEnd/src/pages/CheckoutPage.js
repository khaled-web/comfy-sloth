import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout, Navbar, Sidebar, Footer } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/Wrapper/CheckoutStyled'
const CheckoutPage = () => {
  const {cart}=useCartContext()
  return (
    <main>
      <Navbar/>
      <Sidebar/>
      <PageHero title='checkout'/>
      <Wrapper className='page'>
        {cart.length<1?(
          <div className="empty">
            <h2>your cart is empty</h2>
            <Link to='/products' className='btn'>
            fill it
            </Link>
          </div>
        ):(
          <StripeCheckout/>
        )}
      </Wrapper>
      <Footer/>
    </main>
  )
}

export default CheckoutPage
