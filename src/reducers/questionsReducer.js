import { GET_QUESTIONS, ADD_QUESTIONS } from '../actions/actionTypes'

const questionsReducer = (state={}, action) => {
        switch(action.type) {
            case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
            case ADD_QUESTIONS:
            return{
                ...state,
                [action.question.id]: action.question
            }
            default:
            return state
        }
}

export default questionsReducer