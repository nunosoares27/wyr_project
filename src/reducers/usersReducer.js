import { GET_USERS, ADD_USER_QUESTION } from '../actions/actionTypes'

const usersReducer = (state=null, action) => 
{
    switch(action.type){
        case GET_USERS:
        return {
            ...state,
            ...action.users
        }
        case ADD_USER_QUESTION:
        return {
        ...state,
        [action.loginUser]: {
          ...state[action.loginUser],
          questions: state[action.loginUser].questions.concat([action.questionId])
        }
      }
           
        default:
        return state
    }
}

export default usersReducer