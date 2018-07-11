import { GET_USERS } from '../actions/actionTypes'

const usersReducer = (state=null, action) => 
{
    switch(action.type){
        case GET_USERS:
        return {
            ...state,
            ...action.users
        }
        default:
        return state
    }
}

export default usersReducer