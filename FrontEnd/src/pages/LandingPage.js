import React from 'react'
import Logo from '../components/Logo.js'
import Wrapper from '../assets/Wrapper/LandingPage.js'
import main from '../assets/main.svg'
import {Link} from 'react-router-dom'
const LandingPage = () => {
  return (
    <Wrapper>
      <nav>
       <Logo/>
      </nav>
      <div className="container page">
       {/* info */}
       <div className="info">
        <h1>
         furniture <span>tracking</span> app
         </h1>
         <p>
         Are you ready to talk furniture ? Whether yours is beautiful antique, handily thrifted, desperately purchased when you realized you had nothing to sit on, or of any other furniture variety, you have it.And
         if you’ re a word lover, you can class up the joint and maybe even impress a few guests with some detailed knowledge about your stuff!Or the stuff at that fancy hotel you
         try to stay in once a year.To help you get started, here’ s a list of many types of furniture that you need to add to your cart.
         </p>
       <Link to='/register' className='btn btn-hero'>
        login/register
       </Link>
       </div>
       <img src={main} alt="furniture hunt" className='img main-img'/>
      </div>
    </Wrapper>
  )
}

export default LandingPage
