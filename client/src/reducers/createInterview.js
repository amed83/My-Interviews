import {CREATE_INTERVIEW} from '../actions/costants';

const initialState={
    company:"",
    date:""
}

const createInterview =(state=initialState, action)=>{
    switch(action.type){
        case CREATE_INTERVIEW:
        return{
            ...state,
            company:action.payload.company,
            date:action.payload.date
        }
    }
    
    return state
}

export default createInterview