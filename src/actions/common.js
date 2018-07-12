import { _getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion } from './../_DATA'
import { getUsers } from './users'
import { getQuestions } from './questions'
import { showloading, hideloading } from './loading'

export const initialData = () => {
    return (dispatch) => {
        dispatch(showloading())
        return Promise.all([_getUsers(), _getQuestions()])
        .then( ([users, questions] ) => {
            dispatch(getUsers(users))
            dispatch(getQuestions(questions))
            dispatch(hideloading())
        }).catch( error => { console.log(error.message)}) 
    }
}