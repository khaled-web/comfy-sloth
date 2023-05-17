import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
  Navbar,
  Sidebar
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/Wrapper/SingleProductStyled'

const SingleProductPage = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const {
    single_product_loading:loading,
    single_product_error:error,
    single_product:product,
    fetchSingleProduct
  }=useUserContext()

  useEffect(()=>{
    fetchSingleProduct(id)
  },[])

  useEffect(()=>{
    if(error){
      setTimeout(()=>{
        navigate('/')
      },3000)
    }
    },[error])

  if(loading){
    return <Loading/>
  }
  if(error){
    return <Error/>
  }
  const {company, description, image, name, price, _id:sku,inventory, averageRating:stars, reviews}=product
  return(
    <Wrapper>
      <Navbar/>  
      <Sidebar/>
      <PageHero title={name} product={product}/>
      <div className="section section-center page">
        <Link to='/products' className='btn'>back to products</Link>
        <div className="product-center">
          <ProductImages images={image}/> 
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews}/>
            <h5 className='price'>{formatPrice(price)}</h5>
            <p className='description'>{description}</p>
            <p className="info">
              <span>available :</span>
              {inventory}
            </p>
            <p className='info'>
              <span>SKU :</span>
              {sku}
            </p>
            <p className='info'>
              <span>brand :</span>
              {company}
            </p>
            <hr/>
            {inventory > 0 && <AddToCart product={product}/>}
          </section>
        </div>
      </div>
    </Wrapper>
  ) 
  
}



export default SingleProductPage
