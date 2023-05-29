import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { loadStripe } from '@stripe/stripe-js'
// import {
//   CardElement,
//   useStripe,
//   Elements,
//   useElements,
// } from '@stripe/react-stripe-js'
import axios from 'axios'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { formatPrice } from '../utils/helpers'
import { Navigate, useNavigate } from 'react-router-dom'
import Wrapper from '../assets/Wrapper/StripCheckOut'

const CheckoutForm = () => {
    const { cart, total_amount, shipping_fee, clearCart } = useCartContext()
  const { user,logoutUser } = useUserContext()
  const navigate = useNavigate()
  // STRIPE STUFF
  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState(null)
  const [processing, setProcessing] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')
  // const stripe = useStripe()
  // const elements = useElements()

  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#32325d',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  }


  return (
    <Wrapper>
    <div style={{display:'grid',justifyContent:'center', padding:'5rem'}}>
    {succeeded ? (
        <article>
          <h4>Thank you</h4>
          <h4>Your payment was successful!</h4>
          <h4>Redirecting to home page shortly</h4>
        </article>
      ) : (
        <article>
          <h2 style={{padding:'2rem'}}>Hello, {user}</h2>
          <h3>Your total is {formatPrice(shipping_fee + total_amount)}</h3>
          <button type='button' style={{background:'#eaded7'}} className='btn' onClick={()=>{
            clearCart()
            logoutUser()
          }}>checkout</button>
        </article>
      )}

    </div>
    </Wrapper>
  )
}

const StripeCheckout = () => {
  return (
    
    <Wrapper>
      <CheckoutForm />
    </Wrapper>
  )
}

export default StripeCheckout
