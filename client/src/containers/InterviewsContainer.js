import {connect} from 'react-redux'
import InterviewsComponent from '../components/InterviewsComponent'
import {push} from 'react-router-redux'

export default connect(
    null,
    
    dispatch=>({
        onShowInter:()=>{
            dispatch(push('/dashboard/interviewsList'))
        },
        onAddInter:()=>{
            dispatch(push('/dashboard/createInterview'))
        }
    })
    
    
    
)(InterviewsComponent)