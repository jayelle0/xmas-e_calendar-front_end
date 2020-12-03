import './App.css';
import { BrowserRouter as Router, Route , Switch, withRouter} from 'react-router-dom'
import React from 'react'
import NavBar from "./Navbar"
import CalendarContainer from './CalendarContainer.js'
import Calendar from './Calendar.js'
import Signup from './Signup.js'
import Login from './LogIn.js'
import Home from './Home'
import CalendarForm from './CalendarForm.js' 

class App extends React.Component {
  state = {
    user: null 
  }

  calendarForm = (newCalendar) => {
   let id = this.state.user.id
   const token = localStorage.getItem('token');
    fetch('http://localhost:3000/calendars', {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json",
          "Authorization": `Bearer ${token}`

      },
      body: JSON.stringify({
        user_id: id, 
        name: newCalendar.name})
    })
    .then(response => response.json())
    .then(newCalendarObj => {
      let newUser = {...this.state.user} 
      let newCalendars= newUser.calendars.concat(newCalendarObj)
      newUser.calendars = newCalendars
      this.setState({user: newUser})
      this.renderCalendarDays(newCalendarObj, newUser)
 
    })
  }
  
  renderCalendarDays = (calObj, userObj) => {
    const token = localStorage.getItem('token');
    let date = 0
    let newArray = {...userObj}
    let index = userObj.calendars.findIndex(calendar => calendar.id === calObj.id)
    let dayArray = []
    for (let i = 0; i < 24; i++) {
      date ++
      fetch('http://localhost:3000/days', {
        method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
              date: date,
              calendar_id: calObj.id
          })
        })
        .then(response => response.json())
        .then(newDayObj=> {
          dayArray.push(newDayObj)
      })
    }
    newArray.calendars[index].days = dayArray
    this.setState({user: newArray}
      , () => this.props.history.push('/calendars')
      )
  }
    
    signupSubmitHandler = (newUser) => {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
 
      },
      body: JSON.stringify(newUser)
      })
      .then(r => r.json())
      .then(newUserObj => {
        this.setState({user:newUserObj.user}
          , () => this.props.history.push('/calendar-form'))
        localStorage.setItem("token", newUserObj.jwt)

      });
  }

  loginHandler = (userLogin) => {
  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    
    },
    body: JSON.stringify(userLogin)
    })
    .then(r => r.json())
    .then(loggedInUser => {
      localStorage.setItem("token", loggedInUser.jwt)
      this.setState({user:loggedInUser.user}
        , () => this.props.history.push('/calendars')
        )
    })
}

    createDayData = (id, dayState) => {
      console.log("updating day")
      const token = localStorage.getItem('token');
      fetch(`http://localhost:3000/days/${id}`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json",
              "Accepts": "application/json",
              "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(dayState)
      })
          .then(response => response.json())
          .then((updatedDayObj) => {
            console.log("AFTER THEN STATEMENT")
            let newUser = {...this.state.user}
            let calendarIndex= newUser.calendars.findIndex(calendar=> calendar.id === dayState.calendar_id)
            let dayIndex = newUser.calendars[calendarIndex].days.findIndex(day=> day.id === parseInt(id) )
            newUser.calendars[calendarIndex].days.splice(dayIndex,1,updatedDayObj)
            this.setState({user:newUser})
            console.log(this.state.user)
      })  
    }
  
    
    renderCalendars = () => {
      return <CalendarContainer deleteCalendar={this.deleteCalendar} delete={ this.deleteDayData} user= {this.state.user}/>
    }
    
  renderCalendar = (routerProps) => {
    let id= parseInt(routerProps.match.params.id)
    let foundCalendar =this.state.user.calendars.find((calendar)=> calendar.id === id)
    return  <Calendar calendar = {foundCalendar} createDayData={this.createDayData}/>
  }

  deleteCalendar = (id) => {
    const token = localStorage.getItem('token')
    fetch(`http://localhost:3000/calendars/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then(() => {
      let newUser = {...this.state.user}
      let calendarIndex = newUser.calendars.findIndex(calendar => calendar.id === parseInt(id))
      newUser.calendars.splice(calendarIndex, 1)
      this.setState({user:newUser})
    })
  }

  render(){
    console.log(this.state)
    return (
      <Switch>
        <div>
          <NavBar /> 
          <Route exact path="/signup"render={() => <Signup submitHandler = {this.signupSubmitHandler}/>}/>
          <Route exact path="/login" render={() => <Login loginHandler = {this.loginHandler}/>}/>
          <Route exact path="/" component={Home}/>
          <Route path="/calendars/:id" render={this.renderCalendar}/>
          <Route exact path="/calendars" render={this.renderCalendars}/>
          <Route exact path ="/calendar-form" render={()=> <CalendarForm user= {this.state.user} calendarForm={this.calendarForm} />}/>
        </div>
      </Switch>
    );
  }
  }

  export default withRouter(App)

