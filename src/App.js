import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react'
import NavBar from "./Navbar"
import Menu from './Menu.js'
import CalendarContainer from './CalendarContainer.js'
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
          <Route 
            path="/calendars/:id"
            render = {()=> {
              <CalendarContainer calendars = {this.state.calendars}/>
            }}
          />
            <Route exact path="/calendars" render={() => <Menu calendars = {this.state.calendars}/>}/>
        
          

          {/* <Route path="/calendar-form" component={CalendarForm}/>  */}
        </div>
      </Router>
      // <div >
      //   <h1>App</h1> 
      //   <LogIn/>
      //   <Menu />
      //   <CalendarContainer />
      // </div>
    );
  }
  }

