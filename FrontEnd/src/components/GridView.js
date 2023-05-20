import React from 'react'
import styled from 'styled-components'
import Product from './Product'
import Wrapper from '../assets/Wrapper/GridViewStyled'

const GridView = ({products}) => {
  return(
    <Wrapper>
      <div className="products-container">
        {products.map((product)=>{
          return <Product key = {product._id} {...product}/>
        })}
      </div>
    </Wrapper>  
  )
}


export default GridView
