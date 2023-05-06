import {
 DISPLAY_ALERT,
 CLEAR_ALERT,
 REGISTER_USER_BEGIN,
 REGISTER_USER_SUCCESS,
 REGISTER_USER_ERROR,
 LOGIN_USER_BEGIN,
 LOGIN_USER_SUCCESS,
 LOGIN_USER_ERROR,
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
 throw new Error(`no Such action: ${action.type}`)
}

export default user_reducer