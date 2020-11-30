import './App.css';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import React from 'react'
import NavBar from "./Navbar"
import CalendarContainer from './CalendarContainer.js'
import Calendar from './Calendar.js'
import LogIn from './LogIn.js'
import Home from './Home'

export default class App extends React.Component {
  state = {
    calendars: []
  }
  componentDidMount(){
    fetch('http://localhost:3000/calendars')
    .then(r => r.json())
    .then(calendars => {
      this.setState({
        calendars: calendars
      })
    })
  }
  render(){
    return (
      <Router>
        <div>
          <NavBar /> 
          <Route exact path="/" component={LogIn}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/calendars" render={() => <CalendarContainer calendars = {this.state.calendars}/>}/>
          <Route exact path="/temp-calendar" render= { ()=> <Calendar  {...this.state.calendars[0]}/>}/>
        </div>
      </Router>
    );
  }
  }

