import './App.css';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import React from 'react'
import NavBar from "./Navbar"
import CalendarContainer from './CalendarContainer.js'
import Calendar from './Calendar.js'
import Signup from './Signup.js'
import Login from './Login.js'
import Home from './Home'
import CalendarForm from './CalendarForm.js' 

export default class App extends React.Component {
  state = {
    calendars: [],
    state: null 
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
   let id = this.state.user.id

    console.log(this.state)
    fetch('http://localhost:3000/calendars', {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json"
      },
      body: JSON.stringify({
        user_id: id, 
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
    
    signupSubmitHandler = (newUser) => {
      console.log(newUser)
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(newUser)
      })
      .then(r => r.json())
      .then(newUserObj => {
        this.setState({user:newUserObj.user})
        console.log(newUserObj)
      });
  }

  loginHandler = (userLogin) => {

  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(userLogin)
    })
    .then(r => r.json())
    .then(loggedInUser => {
      this.setState({user:loggedInUser.user}
        // , () => this.props.history.push('/calendars')
        )

    })
}
    
  
  render(){
    return (
      <Router>
        <div>
          <NavBar /> 
          <Route exact path="/signup"render={() => <Signup submitHandler = {this.signupSubmitHandler}/>}/>
          <Route exact path="/login" render={() => <Login loginHandler = {this.loginHandler}/>}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/calendars" render={() => <CalendarContainer user= {this.state.user} calendars = {this.state.calendars}/>}/>
          <Route exact path ="/calendar-form" render={()=> <CalendarForm user= {this.state.user} calendarForm={this.calendarForm} />}/>
        </div>
      </Router>
    );
  }
  }

