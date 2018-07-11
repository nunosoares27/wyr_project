import { _getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion } from './../_DATA'
import { getUsers } from './users'
import { getQuestions } from './questions'

export const initialData = () => {
    return (dispatch) => {
        return Promise.all([_getUsers(), _getQuestions()])
        .then( ([users, questions] ) => {
            dispatch(getUsers(users))
            dispatch(getQuestions(questions))
        }).catch( error => { console.log(error.message)}) 
    }
}