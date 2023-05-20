import React from 'react'
import styled from 'styled-components'
import { Filters, ProductList, Sort, PageHero,Navbar, Sidebar, Footer } from '../components'
import Wrapper from '../assets/Wrapper/ProductsPageStyled'

const ProductsPage = () => {
  return(
    <main >
      <Navbar/>
      <Sidebar/>
      <PageHero title='products'/>
      <Wrapper className='page'>
        <div className="section-center products">
          <Filters/>
          <div>
            <Sort/>
            <ProductList/>
          </div>
        </div>

      </Wrapper>
      <Footer/>
    </main>
  )
}


export default ProductsPage
