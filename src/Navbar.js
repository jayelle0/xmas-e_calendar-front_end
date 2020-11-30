import React from 'react'
import {NavLink} from 'react-router-dom'

export default class NavBar extends React.Component {
  
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
                     <NavLink to="/calendar-form">
                         <li>Create New Calendar</li>
                     </NavLink>
                </ul>

            </div>
        )
    }
}