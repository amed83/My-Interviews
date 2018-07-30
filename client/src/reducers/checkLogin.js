import {CHECK_LOGIN,LOGIN_ERROR} from '../actions/costants'


const initialState ={
    loginOk:false,
    loginError:false
}

const checkLogin = (state=initialState, action)=>{
    switch(action.type){
        case CHECK_LOGIN:
        return{
            ...state,
            loginOk:true
        }
    }
    switch(action.type){
        case LOGIN_ERROR:
            return{
                ...state,
                loginError:true
            }         
    }
    
    return state;
}

export default checkLogin