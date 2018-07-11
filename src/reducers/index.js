import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import usersReducer from './usersReducer'
import questionsReducer from './questionsReducer'

export default combineReducers({
    loginUser : loginReducer,
    users: usersReducer,
    questions: questionsReducer
})