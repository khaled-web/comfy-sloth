import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import AmountButtons from './AmountButtons'
import Wrapper from '../assets/Wrapper/AddToCartStyled'
const AddToCart = ({product}) => {
  const {_id:id, stock, colors}=product
  const [mainColor, setMainColor]=useState(colors[0])
  
  return (
    <Wrapper>
      <div className="colors">
        <span>colors : </span>
        <div>
          {
              colors.map((color,index)=>{
              return <button key={index} className={`${mainColor===color?'color-btn active':'color-btn'}`} style={{background:color}} onClick={()=>setMainColor(color)}>
                {mainColor === color?<FaCheck/>:null}
                </button>
            })
          }
        </div>
      </div>
    </Wrapper>
  )
}
export default AddToCart
