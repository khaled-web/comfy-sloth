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
Register,
DashBoard,
ProtectedRoute} from './pages'


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
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>
        }/>
        <Route path='/about' element={
          <ProtectedRoute>
            <About/>
          </ProtectedRoute>
        }/>
        <Route path='/cart' element={
          <ProtectedRoute>
            <Cart/>
          </ProtectedRoute>
        }/>
        <Route path='/products' element={
          <ProtectedRoute>
            <Product/>
          </ProtectedRoute>
        }/>
        <Route path='/products/:id' element={
        <ProtectedRoute>
          <SingleProduct/>
        </ProtectedRoute>
        }/>
        <Route path='/checkout' element={
        <ProtectedRoute>
          <Checkout/>
        </ProtectedRoute>
        }/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
