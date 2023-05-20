import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/Wrapper/ListViewStyled'
const ListView = ({products}) => {
  return(
  <Wrapper>
    {products.map((product)=>{
      const {_id:id, image, name, price, description} = product
    return(
      <article key={id}>
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <h5 className='price'>
            {formatPrice(price)}
          </h5>
          <p>
            {description.substring(0,150)}...
          </p>
          <Link to={`/products/${id}`} className='btn'>
            details
          </Link>
        </div>
      </article>
    )
  })}
  </Wrapper>
  )

}

export default ListView
