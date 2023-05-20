import {
 //user
 DISPLAY_ALERT,
 CLEAR_ALERT,
 REGISTER_USER_BEGIN,
 REGISTER_USER_SUCCESS,
 REGISTER_USER_ERROR,
 LOGIN_USER_BEGIN,
 LOGIN_USER_SUCCESS,
 LOGIN_USER_ERROR,
 LOGOUT_USER,
 //product
 SIDEBAR_OPEN,
 SIDEBAR_CLOSE,
 GET_PRODUCTS_BEGIN,
 GET_PRODUCTS_SUCCESS,
 GET_PRODUCTS_ERROR,
 GET_SINGLE_PRODUCT_BEGIN,
 GET_SINGLE_PRODUCT_SUCCESS,
 GET_SINGLE_PRODUCT_ERROR,

} from '../actions'

const user_reducer = (state, action) => {
 //User-DisplayAlert
 if (action.type === DISPLAY_ALERT) {
  return {
   ...state,
   showAlert: true,
   AlertType: 'danger',
   AlertText: 'Please provide all values'
  }
 }
 //User-ClearAlert
 if (action.type === CLEAR_ALERT) {
  return {
   ...state,
   showAlert: false,
   AlertText: '',
   AlertType: ''
  }
 }
 //Register_user_begin
 if (action.type === REGISTER_USER_BEGIN) {
  return {
   ...state,
   isLoading: true
  }
 }
 //Register_user_success
 if (action.type === REGISTER_USER_SUCCESS) {
  return {
   ...state,
   token: action.payload.token,
   user: action.payload.tokenUser.name,
   userRole: action.payload.tokenUser.role,
   isLoading: false,
   showAlert: true,
   AlertType: 'success',
   AlertText: 'User Created! Redirecting...'
  }
 }
 //Register_user_Error
 if (action.type === REGISTER_USER_ERROR) {
  return {
   ...state,
   isLoading: false,
   showAlert: true,
   AlertType: 'danger',
   AlertText: action.payload.msg
  }
 }

 //login_user_begin
 if (action.type === LOGIN_USER_BEGIN) {
  return {
   ...state,
   isLoading: true
  }
 }
 //login_user_success
 if (action.type === LOGIN_USER_SUCCESS) {
  return {
   ...state,
   token: action.payload.token,
   user: action.payload.tokenUser.name,
   userRole: action.payload.tokenUser.role,
   isLoading: false,
   showAlert: true,
   AlertType: 'success',
   AlertText: 'Login Successful! Redirecting...'
  }
 }
 //login_user_Error
 if (action.type === LOGIN_USER_ERROR) {
  return {
   ...state,
   isLoading: false,
   showAlert: true,
   AlertType: 'danger',
   AlertText: action.payload.msg
  }
 }
 //logout
 if (action.type === LOGOUT_USER) {
  return {
   ...state,
   user: null,
   token: null,
   userRole: ''
  }
 }
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
 //product-product-begin
 if (action.type === GET_PRODUCTS_BEGIN) {
  return {
   ...state,
   products_loading: true,
  }
 }
 //product-product-success
 if (action.type === GET_PRODUCTS_SUCCESS) {
  const featuredProducts = action.payload.filter((product) => product.featured === true)
  return {
   ...state,
   products_loading: false,
   products: action.payload,
   featured_products: featuredProducts
  }
 }
 //product-product-error
 if (action.type === GET_PRODUCTS_ERROR) {
  return {
   ...state,
   products_loading: false,
   products_error: true
  }
 }
 //product-singleProduct-began
 if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
  return {
   ...state,
   single_product_loading: true,
   single_product_error: false
  }
 }
 //product-singleProduct-success
 if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
  return {
   ...state,
   single_product_loading: false,
   single_product_error: false,
   single_product: action.payload
  }
 }
 //product-singleProduct-error
 if (action.type === GET_SINGLE_PRODUCT_ERROR) {
  return {
   ...state,
   single_product_error: true,
   single_product_loading: false
  }
 }

 throw new Error(`no Such action: ${action.type}`)
}

export default user_reducer