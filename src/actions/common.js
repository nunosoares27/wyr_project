import { _getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion } from './../_DATA'
import { getUsers,addUserQuestion } from './users'
import { getQuestions, addquestion } from './questions'
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

export const handleQuestion = (optionOneText, optionTwoText) => {
  return (dispatch, getState) => {
    const { loginUser } = getState()

    dispatch(showloading())

    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: loginUser,
    })
    .then((formatedQuestion) => {
      dispatch(addquestion(formatedQuestion))
      dispatch(addUserQuestion(loginUser, formatedQuestion.id))
    })
    .then(() => dispatch(showloading()))
  }
}
