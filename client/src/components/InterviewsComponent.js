import React from 'react'
import ReactSVG from 'react-svg'
import PencilIcon from '../Img/Pencil'
import FolderIcon from '../Img/Folder'

const InterviewsComponent = ({onShowInter,onAddInter})=>{
    
    return(
        <div className="interviews-btn__container">
             <button onClick={onAddInter}
                   className='btn-create'>
                   Create Interview
                   <PencilIcon 
                    width={40}
                   className='btn-create__icon'
                   />
            </button>    
            
            <button onClick={onShowInter}
                 className='btn-create'>
                 Your Interviews
                 <FolderIcon 
                  width={40}
                  className='btn-create__icon'
                 />
            </button>
        </div>
    )    
}





export default InterviewsComponent