
import React,{Component} from 'react'
import {Redirect} from 'react-router'

class DashboardComponent extends Component {
        
        handleClick=()=>{
            this.props.onShowInterviews()
        }
        
        render(){
        
            return(
        
                    <div className='dashboard-nav'>
                        <ul className='dashboard-nav__list'>
                            
                            <li className='dashboard-nav__list__item'> 
                                <a href="#"  className='dashboard-nav__list__link'> Home </a> 
                            </li>
                            <li className='dashboard-nav__list__item'> 
                                 <a href="#"  className='dashboard-nav__list__link'
                                 onClick={this.handleClick.bind(this)}>Interviews</a>
                           </li>
                            <li className='dashboard-nav__list__item'> 
                                <a href="#"  className='dashboard-nav__list__link'>Calendar </a>
                           </li>
                            <li className='dashboard-nav__list__item'>
                                <a href="#"  className='dashboard-nav__list__link'>Contact </a>
                            </li>
                        </ul>
                    </div>
                
            )    
        }
}
export default DashboardComponent