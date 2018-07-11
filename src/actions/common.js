import { _getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion } from './../_DATA'
//import { getInitialData } from './../api'
// import { GET_USERS } from './actionTypes'
import { getUsers } from './users'

export const initialData = () => {
    return (dispatch) => {
        return Promise.all([_getUsers()])
        .then( ([users] ) => {
            dispatch(getUsers(users))
        }).catch( error => { console.log(error.message)}) 
    }
}