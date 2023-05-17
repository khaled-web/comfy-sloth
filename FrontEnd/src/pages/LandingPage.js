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
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam quae minima ut veniam, amet exercitationem nostrum soluta ipsa beatae impedit dicta officiis veritatis enim vel voluptatum. Libero modi quia quas quibusdam facere, laudantium omnis et minus amet iusto maxime eveniet earum saepe temporibus voluptates perferendis expedita. Quasi doloremque odit ex.
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
