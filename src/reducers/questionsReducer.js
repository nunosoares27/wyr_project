import { GET_QUESTIONS } from '../actions/actionTypes'

const questionsReducer = (state={}, action) => {
        switch(action.type) {
            case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
            default:
            return state
        }
}

export default questionsReducer