import React from 'react'
import { FaShoppingCart, FaUserMinus,FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import Wrapper from '../assets/Wrapper/CartButton.js'

const CartButtons = () => {
  const {
    user,
    logoutUser,
    closeSidebar
  } = useUserContext()
  const {
    total_items
  } = useCartContext()
  return(
    <Wrapper className='cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn' onClick={()=>closeSidebar()}>
        Cart
        <span className="cart-container">
          <FaShoppingCart/>
          <span className='cart-value'>
            {total_items} 
          </span>
        </span>
      </Link>
      <button type='button' className='auth-btn-user'>
        <FaUserCircle className='auth-favicon-user'/>
        <span className='auth-user'>{user}</span>
      </button>
      <button type='button' className='auth-btn' onClick={logoutUser}>
        logout <FaUserMinus/>
      </button>
    </Wrapper>
  ) 
}

export default CartButtons
