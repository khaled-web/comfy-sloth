import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa'
import Wrapper from '../assets/Wrapper/FilterStyled'
const Filters = () => {
  const {
    updateFilter,
    clearFilter,
    all_products,
    filter:{
    text,
    company,
    category,
    color,
    min_price,
    max_price,
    price,
    shipping
  }
  } = useFilterContext()
  return(
    <Wrapper>
    <div className="content">
      <form onSubmit={(e)=>e.preventDefault()}>
        {/* search input */}
        <div className="form-control">
          <input type="text" name='text' placeholder='search' className='search-input' value={text} onChange={updateFilter}/>
        </div>
        {/* end of search input */}
      </form>
    </div>
    </Wrapper>  
  )
}



export default Filters
