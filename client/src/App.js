import React, { Component } from 'react';
import RegisterContainer from './containers/RegisterContainer'
import LoginContainer from './containers/LoginContainer'
import { Route } from 'react-router-dom'
import HomeComponent from './components/HomeComponent'
import DashboardContainer from './containers/DashboardContainer'
import HeaderComponent from './components/HeaderComponent'
import CreateInterviewContainer from './containers/CreateInterviewContainer'

class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <Route exact path="/" component={RegisterContainer}/>
        <Route exact path="/" component={LoginContainer}/>      
        <Route path="/dashboard" component = {DashboardContainer}/>
        <Route path="/dashboard" component = {HeaderComponent}/>
        <Route path= '/dashboard/home'component = {HomeComponent} />
        <Route path= '/dashboard/createInterview' component={CreateInterviewContainer}/>
      </div>
    );
  }
}

export default App;
