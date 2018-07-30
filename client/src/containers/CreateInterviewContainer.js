import {connect} from 'react-redux'
import InterviewForm from '../components/CreateInterviewComponent'
import {reset} from 'redux-form';
import {createInterview} from '../actions/index'
import {openModal} from '../actions/index'


export default connect(

    state=>({
        modal:state.openModal
    }),
    dispatch =>({
        onSubmit:values=>{
            dispatch(createInterview(values))
            dispatch(reset('interview'))
        },
        onOpenModal:()=>dispatch(openModal())
   })
)(InterviewForm)

