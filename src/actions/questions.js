import { GET_QUESTIONS ,ADD_QUESTIONS} from './actionTypes'

export const getQuestions = (questions) => {
    return {
        type: GET_QUESTIONS,
        questions
    }
}

export const addquestion = (question) => {
    return {
        type: ADD_QUESTIONS,
        question
    }
}