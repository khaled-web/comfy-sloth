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

  const categories = getUniqueValues(all_products, 'category')
  const companies = getUniqueValues(all_products, 'company')
  const colors = getUniqueValues(all_products, 'colors')
  
  return(
    <Wrapper>
    <div className="content">
      <form onSubmit={(e)=>e.preventDefault()}>
        {/* search input */}
        <div className="form-control">
          <input type="text" name='text' placeholder='search' className='search-input' value={text} onChange={updateFilter}/>
        </div>
        {/* end of search input */}

        {/* categories */}
        <div className="form-control">
          <h5>category</h5>
          <div>
            {categories.map((c,index)=>{
              return(
                <button key={index} type='button' name='category' onClick={updateFilter} className={`${
                  category === c.toLowerCase()?'active':null
                }`}>{c}</button>
              )
            })}
          </div>
        </div>
        {/* end of categories */}

        {/* companies */}
        <div className="form-control">
          <h5>company</h5>
          <select name="company" value={company} onChange={updateFilter} className='company'>
            {companies.map((c,index)=>{
              return(
                <option value={c} key={index}>{c}</option>
              )
            })}
          </select>
        </div>
        {/* end of companies */}

        {/* colors */}
        <div className="form-control">
          <h5>colors</h5>
          <div className="colors">
            {colors.map((c,index)=>{
              if(c === 'all'){
                return(
                  <button key={index} name='color' onClick={updateFilter} data-color='all' className={
                    `${color === 'all' ? 'all-btn active' : 'all-btn'}`
                  }>
                    all
                  </button>
                )
              }
              return(
                <button key={index} name='color' style={{background:c}}className={`${color === c?'color-btn active':'color-btn'}`} data-color={c} onClick={updateFilter}>
                  {color === c?<FaCheck/>:null}
                </button>
              )
            })}
          </div>
        </div>
        {/* end of colors */}

        {/* price */}
        <div className="form-control">
          <h5>price</h5>
          <p className="price">
            {formatPrice(price)}
          </p>
          <input type="range" name="price" onChange={updateFilter}
          min={min_price} max={max_price} value={price}/>
        </div>
        {/* end of price */}

      </form>
    </div>
    </Wrapper>  
  )
}



export default Filters
