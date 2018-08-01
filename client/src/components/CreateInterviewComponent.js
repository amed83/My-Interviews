import React,{Component} from 'react'
import { Field, reduxForm, } from 'redux-form';
import {createInterview} from '../actions/index'

const renderField = ({input, type, placeholder,meta:{touched,error}}) => (  
     <div  className='create-interview__container'>
          <input className='create-interview__field'
            type={type}  {...input} placeholder={placeholder}/>
        {touched &&(error &&<span className=''>{error}</span>)}
    </div>
)

 


const CreateInterviewComponent =({handleSubmit})=>{

    // componentDidMount(){
    // 
    //     setTimeout(()=>{
    //         this.props.onOpenModal()
    //     },300)    
    // }
    // 
    // render(){ 
    
        return(
               <div className='create-interview__wrapper'>
                 <div className='create-interview'>
                   <form onSubmit={handleSubmit} className='create-interview__form'>
                       <div className='create-interview__label'>
                       <label>Company</label>
                       <Field  
                           name='company'
                           type='text'
                           component={renderField}       
                       />
                       </div>
                       
                       <div className='create-interview__label'>
                       <label>Date</label>
                       <Field  
                           name='date'
                           type='text'
                           component={renderField}       
                       />
                       </div>
                       
                       <div className='create-interview__label'>
                        <label>Role</label>
                       <Field  
                           name='role'
                           type='text'
                           component={renderField}       
                       />
                       </div>
                       
                       <div className='create-interview__label'>
                       <label>Location</label>
                       <Field  
                           name='location'
                           type='text'
                           component={renderField}       
                       />
                       </div>
                       
                       <div className='create-interview__label'>
                       <label>Interview N.</label>
                       <Field  
                           name='interviewNumber'
                           type='text'
                           component={renderField}       
                       />
                       </div>
                       
                       <div className='create-interview__label'>
                       <label>Scheduled Interviews</label>
                       <Field  
                           name='scheduledInterviews'
                           type='text'
                           component={renderField}       
                       />
                       </div>
                       <button className='btn-submit' >Add</button>
                   </form>
                 </div>
              </div>
          )
            
}



const InterviewForm = reduxForm({
    form:'interview'
})(CreateInterviewComponent);

export default InterviewForm

// style={{transform: this.props.modal.open ? 'translateY(0)':'translateY(-8vh)',
// opacity: this.props.modal.open ?  '1':'0'}}>

