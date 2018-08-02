import {LOGIN} from '../actions/costants'


const initialState ={
    username:"Angelica",
    password:"tafano",
}


const login= (state=initialState,action)=>{
    switch(action.type){
        case LOGIN:
        return{
            ...state,
            username:action.payload.username,
            password:action.payload.password
        }
        break;
        default:
        return state; 
    }
}



export default login