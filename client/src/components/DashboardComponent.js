
import React,{Component} from 'react'
import {Redirect} from 'react-router'

class DashboardComponent extends Component {
        
        handleClick=()=>{
            this.props.onOpenModal()
        }
        
        render(){
        
            return(
                <div className='dashboard'>
                    <ul className='dashboard__list'>
                        
                        <li className='dashboard__list__item'> 
                            <a href="#"  className='dashboard__list__link'> Home </a> 
                        </li>
                        <li className='dashboard__list__item'> 
                             <a href="#"  className='dashboard__list__link'
                             onClick={this.handleClick.bind(this)}>Interviews</a>
                       </li>
                        <li className='dashboard__list__item'> 
                            <a href="#"  className='dashboard__list__link'>Calendar </a>
                       </li>
                        <li className='dashboard__list__item'>
                            <a href="#"  className='dashboard__list__link'>Contact </a>
                        </li>
                        
                    </ul>
                </div>
            )    
        }
}
export default DashboardComponent