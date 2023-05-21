import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  //load-products
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p)=>p.price)
    maxPrice = Math.max(...maxPrice)
    return {
      ...state,
      filtered_products: [...action.payload],
      all_products: [...action.payload],
      filter:{
        ...state.filter,
        max_price:maxPrice,
        price:maxPrice
      }
    }
  }

  //setGridView
  if(action.type === SET_GRIDVIEW){
    return{
      ...state,
      grid_view:true
    }
  }

  //setListView
  if(action.type === SET_LISTVIEW){
    return{
      ...state,
      grid_view:false
    }
  }

  //updateSort
  if(action.type === UPDATE_SORT){
    return{
      ...state,
      sort:action.payload
    }
  }

  //sort-product
  if(action.type === SORT_PRODUCTS){
    const {sort, filtered_products}=state
    let tempProducts = [...filtered_products]
    if(sort === 'price-lowest'){
      tempProducts = tempProducts.sort((a,b)=>{
        return a.price-b.price
      })
    }
    if(sort === 'price-hightest'){
      tempProducts = tempProducts.sort((a,b)=>{
        return b.price - a.price
      })
    }
    if(sort === 'name-a'){
      tempProducts.sort((a,b)=>{
        return a.name.localeCompare(b.name)
      })
    }
    if(sort === 'name-z'){
      tempProducts.sort((a,b)=>{
        return b.name.localeCompare(a.name)
      })
    }
    return{
      ...state,
      filtered_products:tempProducts
    }
  }

  //updateFilter
  if(action.type === UPDATE_FILTERS){
    const {name, value} = action.payload
    return{
      ...state,
      filter:{...state.filter,[name]:value}
    }
  }

  //filterProduct
  if(action.type === FILTER_PRODUCTS){
    console.log('filtering Products...')
    return{
      ...state,

    }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer