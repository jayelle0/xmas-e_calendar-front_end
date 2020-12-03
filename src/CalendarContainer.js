import React from 'react'
import { BrowserRouter as Router, Link, Route , withRouter, Switch, Redirect} from 'react-router-dom'
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
        <div class="card calendar-card shadow-sm">
            <h2 className="calendar-card-name text-center" onClick={() => {this.props.history.push(`/calendars/${calendarObj.id}`)}}>{calendarObj.name}</h2>
           <br></br>
           <img alt= "calendar" src="data:image/png;base64,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"/>
            <button value={calendarObj.id} onClick={this.localClickHandler}>Delete</button>
        </div>
        )}

    render(){

        return (
            <>
            <h1 className="my-calendar">My Calendars</h1>
            <hr></hr>
            {this.props.user?
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
                                return  <Calendar delete ={this.props.delete} calendar = {foundCalendar}/>
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
            </> :
            <Redirect to="/"/>


            }
            </>
        )
    
    }
}

export default withRouter(CalendarContainer)