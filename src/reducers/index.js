import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import usersReducer from './usersReducer'

export default combineReducers({
    loginUser : loginReducer,
    users: usersReducer
})