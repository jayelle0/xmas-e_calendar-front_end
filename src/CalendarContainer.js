import React from 'react'
import { BrowserRouter as Router, Link, Route , withRouter, Switch} from 'react-router-dom'
import Calendar from './Calendar'

class CalendarContainer extends React.Component {
    state = {
        calendar_id: null
    }
    localClickHandler = (event) => {
        // console.log(event.target.value)
        this.props.deleteCalendar(event.target.value)
    }
    renderCalendars = () => {
        return this.props.user.calendars.map(calendarObj => 
        <li>
            <div onClick={() => {this.props.history.push(`/calendars/${calendarObj.id}`)}}>{calendarObj.name}</div>
           <br></br>
           <img alt= "calendar" src="data:image/jpeg;base64,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"/>
            <button value={calendarObj.id} onClick={this.localClickHandler}>Delete</button>
        </li>
        )}

    render(){
        console.log("CALENDAR CONTAINER") 
    
        return (
            <>
           
            { this.props.user === undefined? <h1> Loading Calendars</h1> :
            <div>
                <Router>
                    <Route 
                        path="/calendars/:id"
                        render = {({match})=> {
                            let id= parseInt(match.params.id)
                            let foundCalendar =this.props.user.calendars.find((calendar)=> calendar.id === id)
                            // console.log(foundCalendar)
                            return  <Calendar create={this.props.create} delete ={this.props.delete} calendar = {foundCalendar}/>
                    }}
                    />
                    <Route path="/calendars" render = {()=> {
                        return (
                            <ul>
                                {this.renderCalendars()} 
                            </ul>
                        )
                    }
                }
                />
                </Router>
            </div>
            }
            </>
        )
        
    }
}

export default withRouter(CalendarContainer)