import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import AmountButtons from './AmountButtons'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import Wrapper from '../assets/Wrapper/CartItemStyled'
const CartItem = ({id, image, name, color, price, amount}) => {
  const {removeItem, toggleAmount}=useCartContext()
  const increase = ()=>{
    toggleAmount(id, 'inc')
  }
  const decrease = ()=>{
    toggleAmount(id, 'dec')
  }
  return(
    <Wrapper>
      <div className="title">
        <img src={image} alt={name}/>
        <div>
          <h5 className='name'>{name}</h5>
          <p className='color'>
            color : <span style={{background:color}}></span>
          </p>
          <h5 className='price-small'>{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className='price'>{formatPrice(price)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease}/>
      <h5 className='subtotal'>{formatPrice(price * amount)}</h5>
      <button type='button' className='remove-btn' onClick={()=>removeItem(id)}>
        <FaTrash/>
      </button>
    </Wrapper>
    )
}

export default CartItem
