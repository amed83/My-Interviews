import {connect} from 'react-redux'
import InterviewsListComponent from '../components/InterviewsListComponent'
import {push} from 'react-router-redux'

export default connect(
    
    state=>({
        userList:state.getInterviewsList.interviewsList
    })
        
)(InterviewsListComponent)