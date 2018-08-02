import React from 'react'

const AppComponent = (props) =>{
    return(
        <div className='app-container'>
        
              {props.children}

        </div> 
    )
    
    
}


export default AppComponent