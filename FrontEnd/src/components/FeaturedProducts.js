import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'
import Wrapper from '../assets/Wrapper/FeaturedProduct.js'

const FeaturedProducts = () => {
  const {products_loading,products_error,featured_products}=useProductsContext()
  if(products_loading){
    return <Loading/>
  }
  if(products_error){
    return <Error/>
  }
  return <Wrapper className='section'>
    <div className="title">
      <h2>featured products</h2>
      <div className="underline"></div>
    </div>
    <div className="section-center featured">
      {featured_products.slice(0,3).map((product)=>{
        return <Product key={product._id} {...product}/>
      })}
    </div>
    </Wrapper>
}

export default FeaturedProducts
