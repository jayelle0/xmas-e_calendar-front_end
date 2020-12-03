import React from 'react'
import {NavLink} from 'react-router-dom'

export default class NavBar extends React.Component {
  
    render(){
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                    <a class="navbar-brand" href="/">Advent Calendar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <NavLink to = "/">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to = "/calendars"> View My Calendars</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/calendar-form">Create New Calendar</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}