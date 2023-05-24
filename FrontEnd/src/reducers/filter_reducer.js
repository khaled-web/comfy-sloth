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
    const {all_products} = state
    const {text, company, category, color, price, shipping} = state.filter
    let tempProducts = [...all_products]
    //filtering-text
    if(text){
      tempProducts = tempProducts.filter((product)=>{
        return product.name.toLowerCase().startsWith(text)
      })
    }
    //filtering-category
    if(category !== 'all'){
      tempProducts = tempProducts.filter((product)=>{
        return product.category === category
      })
    }
    //filtering-company
    if(company !== 'all'){
      tempProducts = tempProducts.filter((product)=>{
        return product.company === company
      })
    }
    //filtering-color
    if(color !== 'all'){
      tempProducts = tempProducts.filter((product)=>{
        return product.colors.find((c)=>c===color)
      })
    }
    //filtering-price
    if(price!=='all'){
      tempProducts = tempProducts.filter((product)=>{
        return product.price <= price
      })
    }
    //filtering-shipping
    if(shipping){
      tempProducts = tempProducts.filter((product)=>{
        return product.freeShipping === true
      })
    }



    return{
      ...state,
      filtered_products:tempProducts
    }
  }

  //clear-filter
  if(action.type === CLEAR_FILTERS){
    return{
      ...state,
      filter:{
        ...state.filter,
        text:'',
        company:'all',
        category:'all',
        color:'all',
        price:state.filter.max_price,
        shipping:false,  
      }
    }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer