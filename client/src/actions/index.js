import {REGISTER,LOGIN,CHECK_LOGIN,
    LOGIN_ERROR,CREATE_INTERVIEW,OPEN_MODAL} from './costants';
import axios from 'axios'
import { push } from 'react-router-redux'

export const register=()=>{
    return(dispatch,getState)=>{
        const form = getState().form
        const username = form.register.values.username 
        const password = form.register.values.password 
        const data={
            username,
            password
        }
        dispatch({
            type:REGISTER,
            payload:{
                username,
                password
            }
        })
        axios.post('/newUser',data)
         .then(user=> console.log('user ', user))        
    }    
}

export const login = ()=>{
    return(dispatch,getState)=>{
        const form = getState().form
        const username = form.login.values.username 
        const password = form.login.values.password
        const data= {
            username,
            password
        } 
        dispatch({
            type:LOGIN,
            payload:{
                username,
                password
            }
        })
        dispatch(submitLogin(username,password))
    }
}
     
export const submitLogin = (username,password)=>{
    return(dispatch)=>{
        axios.post('/loginUser', {
            username,
            password
        })
         .then(data=>{
             if(!data.data.success){
                dispatch({
                    type:LOGIN_ERROR
                })
             }else{
                 dispatch({
                     type:CHECK_LOGIN
                 })
                 dispatch(push('/dashboard/'))
             } 
         })
         .catch(err=>console.log('user not found ', err))
    }

}

export const createInterview = () =>{
       return(dispatch,getState)=>{
           const form = getState.form()
           const {company, date} = form.interview.values
           const data={
               company,
               date
           }
            dispatch({
                    type:CREATE_INTERVIEW,
                    payload:data
                })
        }
}

export const openModal = ()=>{
    return{
        type:OPEN_MODAL
    }
}

