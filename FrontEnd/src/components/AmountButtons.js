import React from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'
import Wrapper from '../assets/Wrapper/AmountButtonStyled'
const AmountButtons = ({amount, increase, decrease}) => {
  return(
    <Wrapper className='amount-btns'>
      <button type='button' className='amount-btn' onClick={decrease}>
        <FaMinus/>
      </button>
      <h2 className='amount'>{amount}</h2>
      <button type='button' className='amount-btn' onClick={increase}>
        <FaPlus/>
      </button>
    </Wrapper>
  )
}


export default AmountButtons
