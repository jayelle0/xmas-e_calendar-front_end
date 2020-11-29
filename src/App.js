import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react'
import NavBar from "./Navbar"
import Menu from './Menu.js'
import CalendarContainer from './CalendarContainer.js'
import LogIn from './LogIn.js'
import Home from './Home'

export default class App extends React.Component {
  render(){
    return (
      <Router>
        <div>
          <Route exact path="/" component={LogIn}/>
          <Route exact path="/home" component={Home}/>
          <Route path="/:calendarId" component={CalendarContainer}/>
          {/* <Route path="/calendar-form" component={CalendarForm}/>  */}
        </div>
      </Router>
      // <div >
      //   <h1>App</h1> 
      //   <LogIn/>
      //   <NavBar />
      //   <Menu />
      //   <CalendarContainer />
      // </div>
    );
  }
  }

