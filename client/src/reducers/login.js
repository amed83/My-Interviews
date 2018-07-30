import {LOGIN} from '../actions/costants'


const initialState ={
    username:null,
    password:null
}


const login= (state=initialState,action)=>{
    switch(action.type){
        case LOGIN:
        return{
            ...state,
            username:action.payload.username,
            password:action.payload.password
        }
    }
    return state;
}



export default login