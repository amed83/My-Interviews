import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import register from './register'
import login from './login'
import checkLogin from './checkLogin'
import createInterview from './createInterview'
import openModal from './openModal'

const appReducer = combineReducers({
    form:formReducer,
    register,
    login,
    checkLogin,
    createInterview,
    openModal
})


export default appReducer