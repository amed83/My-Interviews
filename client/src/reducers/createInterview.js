import {CREATE_INTERVIEW} from '../actions/costants';

const initialState={
    company:"",
    date:"",
    role:"",
    location:"",
    interviewNumber:"",
    scheduledInterviews:""
}

const createInterview =(state=initialState, action)=>{
    switch(action.type){    
        case CREATE_INTERVIEW:
        let {company,date,role,location,interviewNumber,scheduledInterviews} = action.payload
        return{
            ...state,
            company,
            date,
            role,
            location,
            interviewNumber,
            scheduledInterviews
        }
        default:
        return state; 
    }
    
}

export default createInterview