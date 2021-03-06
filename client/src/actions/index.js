import {REGISTER,LOGIN,CHECK_LOGIN,
    LOGIN_ERROR,CREATE_INTERVIEW,OPEN_MODAL,INTERVIEWS_LIST} from './costants';
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
        // const username = form.login.values.username 
        // const password = form.login.values.password
        const username = 'Angelica'
        const password = 'tafano'
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
             console.log('data after login ',data)
             if(!data.data.success){
                dispatch({
                    type:LOGIN_ERROR
                })
             }else{
                 dispatch({
                     type:CHECK_LOGIN,
                     payload:data.data.id
                 })
                 dispatch(push('/dashboard'))
             } 
         })
         .catch(err=>console.log('user not found ', err))
    }

}

export const createInterview = () =>{
       return(dispatch,getState)=>{
           const form = getState().form
           const username = getState().login.username
           const {company, date,role,location,interviewNumber,scheduledInterviews} = form.interview.values
           const data={
               company,
               date,
               role,
               location,
               interviewNumber,
               scheduledInterviews 
           }
            dispatch({
                    type:CREATE_INTERVIEW,
                    payload:data
                })
            console.log('username ', username)
            axios.post(`/createInterview/${username}`,data )
             .then(response=> console.log('response diopuerc ', response))
             .catch(err=> console.log('errore diomaiale',err))
        }
}

export const openModal = ()=>{
    return{
        type:OPEN_MODAL
    }
}

export const getInterviewsList = ()=> {
    return(dispatch,getState)=>{
        const user_id = getState().checkLogin.user_id
        axios.get(`/userInterviews/${user_id}`)
        .then(data=> {
            console.log('data after get ', data.data)
            dispatch({
                type:INTERVIEWS_LIST,
                payload:data.data.interviews
            })
        })    
    }    
}


