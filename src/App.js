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

  calendarForm = (newCalendar) => {
    console.log(this.state)
    fetch('http://localhost:3000/calendars', {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json"
      },
      body: JSON.stringify({
        user_id:7, 
        name: newCalendar.name})
    })
    .then(response => response.json())
    .then(newCalendarObj => {
      this.renderCalendarDays(newCalendarObj)
      // this.setState({
      //   calendars: this.state.calendars.concat(newCalendarObj)
      // })
    })
    // .then(data => {console.log(data)})
  }
  
  renderCalendarDays = (calObj) => {
 
    let date = 0
    // let newArray = [...this.state.calendars]
    // let index = newArray.findIndex(calendar => calendar.id === id)
    // console.log(newArray)
    for (let i = 0; i < 24; i++) {
      date ++
      fetch('http://localhost:3000/days', {
        method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              date: date,
              calendar_id: calObj.id
          })
        })
      //   .then(response => response.json())
      //   .then(newDayObj=> {
      //     console.log(index)
      //     newArray[index].days.concat(newDayObj)
      //     this.setState({calendars:newArray})
        
      // })
    }
    this.setState({
      calendars: this.state.calendars.concat(calObj)
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

