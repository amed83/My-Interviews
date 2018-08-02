import {connect} from 'react-redux'
import RegisterForm from '../components/RegisterComponent'
import {register} from '../actions/index'
import {reset} from 'redux-form';
import {push} from 'react-router-redux'

const mapStateToProps = state=>({
    state:state.register
})


export default connect( 
    mapStateToProps,
    dispatch =>({
        onSubmit:values=>{
            dispatch(register(values))
            dispatch(reset('register'))
            dispatch(push('/dashboard'))
        }
    })
)(RegisterForm)

