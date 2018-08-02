import React, { Component } from 'react';
import RegisterContainer from './containers/RegisterContainer'
import LoginContainer from './containers/LoginContainer'
import { Route } from 'react-router-dom'
import HomeComponent from './components/HomeComponent'
import DashboardContainer from './containers/DashboardContainer'
import HeaderComponent from './components/HeaderComponent'
import CreateInterviewContainer from './containers/CreateInterviewContainer'
import InterviewsListContainer from './containers/InterviewsListContainer'
import InterviewsContainer from './containers/InterviewsContainer'
import AppComponent from './components/AppComponent'

class App extends Component {
  render() {
    return (
      <AppComponent>
        <Route exact path="/" component={RegisterContainer}/>
        <Route exact path="/" component={LoginContainer}/>      
        <Route path="/dashboard" component = {DashboardContainer}/>
        <Route path="/dashboard" component = {HeaderComponent}/>
        <Route path= '/dashboard/home'component = {HomeComponent} />
        <Route path='/dashboard/interviews' component={InterviewsContainer}/>
        <Route path= '/dashboard/createInterview' component={CreateInterviewContainer}/>
        <Route path= '/dashboard/interviewsList'component={InterviewsListContainer}/>
      </AppComponent >
    );
  }
}

export default App;
