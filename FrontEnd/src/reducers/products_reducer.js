import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const products_reducer = (state, action) => {
  //openSidebar
  if (action.type === SIDEBAR_OPEN) {
    return {
      ...state,
      isSidebarOpen: true
    }
  }
  //closeSidebar
  if (action.type === SIDEBAR_CLOSE) {
    return {
      ...state,
      isSidebarOpen: false
    }
  }
  //product-begin
  if (action.type === GET_PRODUCTS_BEGIN) {
    return {
      ...state,
      products_loading: true,
    }
  }
  //product-success
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featuredProducts = action.payload.filter((product) => product.featured === true)
    return {
      ...state,
      products_loading: false,
      products: action.payload,
      featured_products: featuredProducts
    }
  }
  //product-error
  if (action.type === GET_PRODUCTS_ERROR) {
    return {
      ...state,
      products_loading: false,
      products_error: true
    }
  }
  //singleProduct-began
  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return {
      ...state,
      single_product_loading: true,
      single_product_error: false
    }
  }
  //singleProduct-success
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: false,
      single_product: action.payload
    }
  }
  //singleProduct-error
  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      single_product_error: true,
      single_product_loading: false
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer