import {REGISTER} from '../actions/costants'

const initialState ={
    username:null,
    password:null
}


const register= (state=initialState,action)=>{
    switch(action.type){
        case REGISTER:
        return{
            ...state,
            username:action.payload.username,
            password:action.payload.password
        }
        default:
        return state; 
    }

}



export default register


