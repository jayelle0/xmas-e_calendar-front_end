import './App.css';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import React from 'react'
import NavBar from "./Navbar"
import CalendarContainer from './CalendarContainer.js'
import Calendar from './Calendar.js'
import Signup from './Signup.js'
import Login from './LogIn.js'
import Home from './Home'
import CalendarForm from './CalendarForm.js' 

export default class App extends React.Component {
  state = {
    user: null 
  }

//   componentDidMount=() => {
//     const token = localStorage.getItem('token');
//     if (token ){
//       let id = this.state.user.id
//     fetch(`http://localhost:3000/users/${id}`, {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     }) 
//     .then(r => r.json())
//     .then(user => {
//       this.setState({ calendars: user.calendar })
    
//     })
//   } 
// }



  calendarForm = (newCalendar) => {
   let id = this.state.user.id
   const token = localStorage.getItem('token');
    console.log(this.state)
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
      //  pass in new user array as an argument, find index from this array and setstate with new array 
     

      // this.setState({
      //   calendars: this.state.calendars.concat(newCalendarObj)
      // })
    })
  }
  
  renderCalendarDays = (calObj, userObj) => {
    const token = localStorage.getItem('token');
    let date = 0
    let newArray = {...userObj}
    let index = userObj.calendars.findIndex(calendar => calendar.id === calObj.id)
    let dayArray = []
    console.log(newArray)
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
    this.setState({user: newArray})
  }
    
    signupSubmitHandler = (newUser) => {
      console.log(newUser)
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
        this.setState({user:newUserObj.user})
        localStorage.setItem("token", newUserObj.jwt)
        console.log(newUserObj)
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
        // , () => this.props.history.push('/calendars')
        )
        console.log(loggedInUser)
    })
}

    createDayData = (id, dayState) => {
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
            let newUser = {...this.state.user}
            let calendarIndex= newUser.calendars.findIndex(calendar=> calendar.id === dayState.calendar_id)
            // debugger
            let dayIndex = newUser.calendars[calendarIndex].days.findIndex(day=> day.id === id )
             newUser.calendars[calendarIndex].days[dayIndex] = updatedDayObj
             this.setState({user:newUser})

          // this.props.submitHandler(this.state);
      })
      
    }
    deleteDayData = (id, dayState)=> {
      const token = localStorage.getItem('token');
      const data = {
        content: "", 
        image_video: "", 
        calendar_id: this.props.calendarId, 
        date: this.props.date
      }
      fetch(`http://localhost:3000/days/${id}`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json",
              "Accepts": "application/json",
              "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(data)
      })
    }   
    
  
  render(){
    console.log(this.state)
    return (
      <Router>
        <div>
          <NavBar /> 
          <Route exact path="/signup"render={() => <Signup submitHandler = {this.signupSubmitHandler}/>}/>
          <Route exact path="/login" render={() => <Login loginHandler = {this.loginHandler}/>}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/calendars" render={() => <CalendarContainer create= {this.createDayData} delete={ this.deleteDayData} user= {this.state.user} />}/>
          <Route exact path ="/calendar-form" render={()=> <CalendarForm user= {this.state.user} calendarForm={this.calendarForm} />}/>
        </div>
      </Router>
    );
  }
  }

