import { GET_USERS, ADD_USER_QUESTION } from './actionTypes'

export const getUsers = (users) => {
    return {
        type: GET_USERS,
        users,
    }
}

export const addUserQuestion = (loginUser, questionId) => {
    return {
        type: ADD_USER_QUESTION,
        loginUser,
        questionId
    }
}
