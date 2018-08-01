import {connect} from 'react-redux'
import DashboardComponent from '../components/DashboardComponent'
import {push} from 'react-router-redux'



export default connect(
    
    state=>({
        modalVisible:state.openModal
    }),

    dispatch=>({
        onOpenModal:()=>{
            dispatch(push('/dashboard/createInterview'))
        } 
    })
    
    
)(DashboardComponent)