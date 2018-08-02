import React  from 'react';


const InterviewsListComponent = ({userList}) =>{
    let interviewItem="";
    if(userList.length>0){
        console.log('user interview ', userList)
         interviewItem = userList.map(interview=>{
             
             return(
                 <div className='interviews-list'>
                    <ul className='interviews-list__container'>
                        <li className='interviews-list__item'><b>Company</b>: {interview.company}</li>
                        <li className='interviews-list__item'><b>Date:</b> {interview.date}</li>
                        <li className='interviews-list__item'><b>Role:</b> {interview.role}</li>
                        <li className='interviews-list__item'><b>Interview N. </b>{interview.interviewNumber}</li>
                        <li className='interviews-list__item'><b>Location:</b>{interview.location}</li>
                        <li className='interviews-list__item'><b>Other Interview:</b> {interview.scheduledInterviews}</li>
                    </ul>
                 </div>
             )
            
        })
    }
    return(
        <div>
            {interviewItem}
            
        </div>
    )
}


export default InterviewsListComponent