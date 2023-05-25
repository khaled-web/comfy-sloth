import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import AmountButtons from './AmountButtons'
import Wrapper from '../assets/Wrapper/AddToCartStyled'


const AddToCart = ({product}) => {
  const {
    addToCart
  } = useCartContext()
  const {_id:id, inventory, colors}=product
  const [amount, setAmount]=useState(1)
  const [mainColor, setMainColor]=useState(colors[0])

  const increase = ()=>{
    setAmount((oldAmount)=>{
      let tempAmount = oldAmount + 1
      if(tempAmount > inventory){
        tempAmount = inventory
      }
      return tempAmount
    })
  }
  
  const decrease = ()=>{
    setAmount((oldAmount)=>{
      let tempAmount = oldAmount - 1
      if(tempAmount < 1){
        tempAmount = 1
      }
      return tempAmount
    })
  }

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
      <div className="btn-container">
        <AmountButtons amount={amount} increase={increase} decrease={decrease}/>
        <Link to='/cart' className='btn' onClick={()=>addToCart(id,mainColor,amount,product)}>
          add to cart
        </Link>
      </div>
    </Wrapper>
  )
}
export default AddToCart
