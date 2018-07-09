import { LOGIN, LOGOUT } from '../actions/actionTypes'

export default function loginReducer(state=null, action)
{
    switch(action.type){
        case LOGIN:
        return action.id
        case LOGOUT:
        return null
        default:
        return state
    }
}