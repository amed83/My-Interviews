import React,{Component} from 'react'
import { Field, reduxForm, } from 'redux-form';


const renderField = ({input, type, placeholder,meta:{touched,error}}) => (  
     <div  className='create-interview__container'>
          <input className='create-interview__field'
            type={type}  {...input} placeholder={placeholder}/>
        {touched &&(error &&<span className=''>{error}</span>)}
    </div>
)

 


class CreateInterviewComponent extends Component{
    
    handleSubmit=()=>{
        this.props.onSubmit()
    }
    
    componentDidMount(){
        console.log('hello component mount')
        setTimeout(()=>{
            this.props.onOpenModal()
        },300)
        
    }
    
    render(){
        
        return(
               <div className='create-interview__wrapper'>
                 <div className='create-interview'
                 style={{transform: this.props.modal.open ? 'translateY(0)':'translateY(-8vh)',
                 opacity: this.props.modal.open ?  '1':'0'}}>
                   <form className='create-interview__form'>
                       <div className='create-interview__label'>
                       <label>Company</label>
                       <Field onSubmit={this.handleSubmit.bind(this)} 
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
                           name='City'
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
                   <button>Add</button>
                   </form>
                 </div>
              </div>
          )
        }    
}

const InterviewForm = reduxForm({
    form:'interview'
})(CreateInterviewComponent);

export default InterviewForm
