import React from 'react'
import { FaShoppingCart, FaUserMinus,FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import Wrapper from '../assets/Wrapper/CartButton.js'

const CartButtons = () => {
  const{closeSidebar}=useProductsContext()
  const {user,logoutUser}=useUserContext()
  return(
    <Wrapper className='cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn' onClick={()=>closeSidebar()}>
        Cart
        <span className="cart-container">
          <FaShoppingCart/>
          <span className='cart-value'>
            12 
          </span>
        </span>
      </Link>
      <button type='button' className='auth-btn-user'>
        <FaUserCircle className='auth-favicon-user'/>
        {user}
      </button>
      <button type='button' className='auth-btn' onClick={logoutUser}>
        logout <FaUserMinus/>
      </button>
    </Wrapper>
  ) 
}

export default CartButtons
