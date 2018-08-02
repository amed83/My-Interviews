import {INTERVIEWS_LIST} from '../actions/costants'


const initialState = {
    interviewsList:[]
}


const getInterviewsList =(state=initialState, action)=>{
    switch (action.type) {
        case INTERVIEWS_LIST:
            return{
                ...state,
                interviewsList:action.payload
            }
        default:
        return state        
    }
        
}

export default getInterviewsList