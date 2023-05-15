import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import Wrapper from '../assets/Wrapper/StarsStyled.js'
const Stars = ({stars, reviews}) => {
  return(
    <Wrapper>
      <div className="stars">
        {/* star */}
        <span>
          {stars >= 1 ? <BsStarFill/> : stars >= .5 ?<BsStarHalf/>:<BsStar/>}
        </span>
        {/* end of star */}
        {/* star */}
        <span>
          {stars >= 2 ? <BsStarFill/> : stars >= 1.5 ?<BsStarHalf/>:<BsStar/>}
        </span>
        {/* end of star */}
        {/* star */}
        <span>
          {stars >= 3 ? <BsStarFill/> : stars >= 2.5 ?<BsStarHalf/>:<BsStar/>}
        </span>
        {/* end of star */}
        {/* star */}
        <span>
          {stars >= 4 ? <BsStarFill/> : stars >= 3.5 ?<BsStarHalf/>:<BsStar/>}
        </span>
        {/* end of star */}
        {/* star */}
        <span>
          {stars === 5 ? <BsStarFill/> : stars >= 4.5 ?<BsStarHalf/>:<BsStar/>}
        </span>
        {/* end of star */}
      </div>
      <p className="reviews">({reviews} customers views)</p>
    </Wrapper>
  ) 
}
export default Stars
