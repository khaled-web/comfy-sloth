import React from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import { 
 Home,
 About,
 AuthWrapper,
 Cart,
 Checkout,
 Error,
 PrivateRoute,
 Product,
 SingleProduct,
Register} from './pages'


function App() {
  return(
    // <Router>
    //   <Navbar/>
    //   <Sidebar/>
    //   <Switch>
    //     <Route exact path='/'>
    //       <Home/>
    //     </Route>

    //     <Route exact path='/about'>
    //       <About/>
    //     </Route>

    //     <Route exact path='/cart'>
    //       <Cart/>
    //     </Route>

    //     <Route exact path='/products'>
    //       <Product/>
    //     </Route>

    //     <Route exact path='/products/:id' children={SingleProduct}> 
    //     </Route>

    //     <Route exact path='/checkout'>
    //       <Checkout/>
    //     </Route>

    //     <Route exact path='*'>
    //       <Error/>
    //     </Route>

    //   </Switch>
    //   <Footer/>
    // </Router>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/products/:id' element={<SingleProduct/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
