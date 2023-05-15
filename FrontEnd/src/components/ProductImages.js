import React, { useState } from 'react'
import styled from 'styled-components'
import Wrapper from '../assets/Wrapper/ProductImageStyled'
const ProductImages = ({images}) => {
  return (
    <Wrapper>
      <img src={images} alt="mainImage"/>
    </Wrapper>
  )
}

export default ProductImages
