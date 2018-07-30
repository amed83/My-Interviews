import React from 'react'
import { Field, reduxForm, } from 'redux-form';


const renderField = ({input, type, placeholder,meta:{touched,error}}) => (  
     <div  className='login-form__container'>
          <input className='login-form__field'
            type={type}  {...input} placeholder={placeholder}/>
        {touched &&(error &&<span className='login-form__error'>{error}</span>)}
    </div>
)

const required = value=> value === undefined ? 'Required!': ""

const LoginComponent =({handleSubmit,loginError})=>{
    
    let loginErrorMessage='';
    if(loginError.loginError){
        loginErrorMessage= 'Error during login'
    }
    
    return(
            <div className='login-form'>
                <h2 className='login-form__title'>Login if you are already a member</h2>
                <form onSubmit={handleSubmit}>    
                    <Field 
                        name="username"
                        placeholder="Username"
                        component={renderField}
                        type="text"
                        validate={required}
                    />    
                    <Field 
                        name="password"
                        placeholder="Password"
                        component={renderField}
                        type="password"
                        validate={required}
                    />
                   <button className='register-form__button'>Login</button>            
                </form>
                 <span className='login-form__error-message'> {loginErrorMessage}</span>
        </div>
    )
    
}

const LoginForm = reduxForm({
    form:'login'
})(LoginComponent);

export default LoginForm