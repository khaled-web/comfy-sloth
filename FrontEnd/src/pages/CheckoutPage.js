import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/Wrapper/CheckoutStyled'
const CheckoutPage = () => {
  return (
    <main>
      <PageHero title='checkout'/>
      <Wrapper className='page'>
        <h2>checkout here</h2>
      </Wrapper>
    </main>
  )
}

export default CheckoutPage
