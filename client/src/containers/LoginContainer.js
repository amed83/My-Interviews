import {connect} from 'react-redux'
import LoginForm from '../components/LoginComponent'
import {login} from '../actions/index'
import {reset} from 'redux-form';


export default connect(        
    state=>({
        loginError:state.checkLogin
    }),
    
    dispatch =>({
        onSubmit:values=>{
            dispatch(login(values))
            dispatch(reset('login'))
        }
    })
    
)(LoginForm)