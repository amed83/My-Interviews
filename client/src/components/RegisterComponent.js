import React from 'react'
import { Field, reduxForm, } from 'redux-form';

const renderField = ({input, type, placeholder,meta:{touched,error}}) => (  
     <div  className='register-form__field__container'>
          <input className='register-form__field'
            type={type}  {...input} placeholder={placeholder}/>
        {touched &&(error &&<span className='register-form__field__errors'>{error}</span>)}
    </div>
)

const required = value=> value === undefined ? 'Required!': ""

const matchPassword = (input, allInputs) =>
input === allInputs.password ? undefined : 'Passwords do not match'

const RegisterComponent= ({handleSubmit})=>{

    return(
             <div className='register-form'>
                <h2 className="register-form__title">Insert your data and register</h2>
                <form onSubmit={handleSubmit} className='register-form__form'>
                    <Field
                        name="username"
                        component={renderField}
                        placeholder="Username"
                        type="text"
                        validate={required}
                    />        
                  <Field 
                        name="password"
                        component={renderField}
                        placeholder="Password"
                        type="password"
                    />
                  <Field 
                        name="confirmPassword"
                        component={renderField}
                        placeholder="Confirm password"
                        type="password"
                        validate={matchPassword}
                    />
                <button className='register-form__button'>Sign Up</button>
            </form>
        </div>
    )
}

const RegisterForm = reduxForm({
    form:'register'
})(RegisterComponent);

export default RegisterForm
