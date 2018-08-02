import {connect} from 'react-redux'
import DashboardComponent from '../components/DashboardComponent'
import {push} from 'react-router-redux'
import {getInterviewsList} from '../actions/index'


export default connect(
    
    state=>({
        modalVisible:state.openModal
    }),

    dispatch=>({
        onShowInterviews:()=>{
            dispatch(getInterviewsList())
            dispatch(push('/dashboard/interviews'))
        } 
    })
    
    
)(DashboardComponent)