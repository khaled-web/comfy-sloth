import React from 'react'
import {
  FeaturedProducts,
  Hero,
  Services,
  Contact,
  Navbar,
  Sidebar,
  Footer
} from '../components'
const HomePage = () => {
  return ( 
    <main>
    <Navbar/>
    <Sidebar/>
    <Hero/>
    <FeaturedProducts/>
    <Services/>
    <Contact/>
    </main>
  )
}

export default HomePage