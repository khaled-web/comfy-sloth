import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/Wrapper/CartTotalStyled'

const CartTotals = () => {
  const {total_amount:amount, shipping_fee:Shipping}=useCartContext()
  return(
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>{formatPrice(amount)}</span>
          </h5>
          <p>shipping fee : {formatPrice(Shipping)}</p>
          <hr/>
          <h4>
            order total : <span>{formatPrice(amount + Shipping)}</span>
          </h4>
        </article>
        <Link to='/checkout' className='btn'>
          proceed to checkout
        </Link>
      </div>
    </Wrapper>
  )
}


export default CartTotals
