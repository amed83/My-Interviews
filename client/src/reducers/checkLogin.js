import {CHECK_LOGIN,LOGIN_ERROR} from '../actions/costants'


const initialState ={
    loginOk:false,
    loginError:false,
    user_id:null
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