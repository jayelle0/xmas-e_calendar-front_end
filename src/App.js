import './App.css';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import React from 'react'
import NavBar from "./Navbar"
import CalendarContainer from './CalendarContainer.js'
import Calendar from './Calendar.js'
import LogIn from './LogIn.js'
import Home from './Home'
import CalendarForm from './CalendarForm.js' 

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

  calendarForm(newCalendar) {
    fetch('http://localhost:3000/calendars', {
      method: 'POST',
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id:2, 
        newCalendar})
    })
    .then(response => response.json())
    .then(newCalendarObj => {
      this.setState({calendars: [...this.state.calendars, newCalendarObj]})
      console.log('Success:', newCalendarObj);
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
          <Route exact path ="/calendar-form" render={()=> <CalendarForm calendarForm={this.calendarForm} />}/>
        </div>
      </Router>
    );
  }
  }

