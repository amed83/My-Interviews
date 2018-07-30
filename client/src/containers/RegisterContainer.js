import {connect} from 'react-redux'
import RegisterForm from '../components/RegisterComponent'
import {register} from '../actions/index'
import {reset} from 'redux-form';


const mapStateToProps = state=>({
    state:state.register
})


export default connect( 
    mapStateToProps,
    dispatch =>({
        onSubmit:values=>{
            dispatch(register(values))
            dispatch(reset('register'))
        }
    })
)(RegisterForm)

