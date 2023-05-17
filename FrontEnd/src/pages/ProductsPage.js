import React from 'react'
import styled from 'styled-components'
import { Filters, ProductList, Sort, PageHero,Navbar, Sidebar, Footer } from '../components'

const ProductsPage = () => {
  return(
    <main >
      <Navbar/>
      <Sidebar/>
      <PageHero title='product'/>
      <h1>ProductsPage</h1>
      <Footer/>
    </main>
  )
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage
