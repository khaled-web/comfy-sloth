import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'
import { useUserContext } from './user_context'

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view:true,
  sort:'price-lowest',
  filter:{
    text:'',
    company:'all',
    category:'all',
    color:'all',
    min_price:0,
    max_price:0,
    price:0,
    shipping:false,  
  }
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const {products} = useUserContext()
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(()=>{
    dispatch({
      type:LOAD_PRODUCTS,
      payload:products
    })
  },[products])

  useEffect(()=>{
    dispatch({type:FILTER_PRODUCTS})
    dispatch({type:SORT_PRODUCTS})
  },[products,state.sort,state.filter])

  //setGridView
  const setGridView = ()=>{
    dispatch({type:SET_GRIDVIEW})
  }

  //setListView
  const setListView = ()=>{
    dispatch({type:SET_LISTVIEW})
  }

  //updateSort
  const updateSort = (e)=>{
    //for demonstration
    // const name = e.target.name
    const value = e.target.value
    dispatch({type:UPDATE_SORT, payload:value})
  }

  //updateFilter
  const updateFilter = (e)=>{
    let name = e.target.name
    let value = e.target.value
    if(name === 'category'){
      value = e.target.textContent
    }
    if(name === 'color'){
      value = e.target.dataset.color
    }
    if(name === 'price'){
      value = Number(value)
    }
    if(name === 'shipping'){
      value = e.target.checked
    }
    dispatch({type:UPDATE_FILTERS, payload:{name,value}})
  }

  //clearFilter
  const clearFilter = ()=>{
    dispatch({type:CLEAR_FILTERS})
  }
  return (
    <FilterContext.Provider value={{
      ...state,
      setGridView,
      setListView,
      updateSort,
      updateFilter,
      clearFilter
    }}>
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
