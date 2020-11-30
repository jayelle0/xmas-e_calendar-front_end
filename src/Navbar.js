import React from 'react'
import {NavLink} from 'react-router-dom'

export default class NavBar extends React.Component {
    state = {
        calendarName: "", 
        formDisplay: false
    }
    
    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    calendarForm = () => {
        this.setState({formDisplay:!this.state.formDisplay})
    }
    newCalendar = () => {
        const data = {
            name: this.state.calendarName,
            user_id: 1
            // UPDATE USER ID
        }
        fetch('http://localhost:3000/calendars', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }
    render(){
        return (
            <div>
                <ul>
                    <NavLink to = "/home"> 
                        <li>Home </li>             
                     </NavLink>
                     <NavLink to = "/calendars"> 
                        <li>View My Calendars </li>             
                     </NavLink>
                </ul>
                <button onClick={this.calendarForm}>Create New Calendar</button>
                {this.state.formDisplay ?
                <form onSubmit={this.newCalendar}>
                    <label>Name Your Calendar</label>
                    <input onChange={this.changeHandler} value={this.state.calendarName} name="calendarName" ></input>
                    <button type="submit">Submit</button></form> :
                    null
                    }
                
                
            </div>
        )
    }
}