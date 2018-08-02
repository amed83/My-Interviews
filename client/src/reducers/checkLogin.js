import {CHECK_LOGIN,LOGIN_ERROR} from '../actions/costants'


const initialState ={
    loginOk:false,
    loginError:false,
    user_id:"5b61db7ede3e913104213099"
}

const checkLogin = (state=initialState, action)=>{

    switch(action.type){
        case CHECK_LOGIN:
        return{
            ...state,
            loginOk:true,
            user_id:action.payload
        }
    }
    switch(action.type){
        case LOGIN_ERROR:
            return{
                ...state,
                loginError:true
            }
            default:
            return state;         
    }
    
}

export default checkLogin