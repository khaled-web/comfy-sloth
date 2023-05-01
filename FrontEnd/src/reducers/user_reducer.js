import {
 DISPLAY_ALERT,
 CLEAR_ALERT
} from '../actions'

const user_reducer = (state, action) => {
 //User-DisplayAlert
 if (action.type === DISPLAY_ALERT) {
  return {
   ...state,
   showAlert: true,
   alertType: 'danger',
   alertText: 'Please provide all values'
  }
 }
 //User-ClearAlert
 if (action.type === CLEAR_ALERT) {
  return {
   ...state,
   showAlert: false,
   AlertText: '',
   alertType: ''
  }
 }
 throw new Error(`no Such action: ${action.type}`)
}

export default user_reducer