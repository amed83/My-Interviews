import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import register from './register'
import login from './login'
import checkLogin from './checkLogin'
import createInterview from './createInterview'
import openModal from './openModal'
import getInterviewsList from './getInterviewsList'

const appReducer = combineReducers({
    form:formReducer,
    register,
    login,
    checkLogin,
    createInterview,
    openModal,
    getInterviewsList
})


export default appReducer