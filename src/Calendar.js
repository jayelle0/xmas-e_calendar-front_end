import React from 'react'
import Day from './Day.js'
import {withRouter} from 'react-router-dom'

class Calendar extends React.Component{

    renderCalendarDays=() => {
        console.log(this.props.calendar.id)
       let sortedArray = this.props.calendar.days.sort((a, b) => (a.date > b.date) ? 1 : -1)
        // console.log(sortedArray)
        
       return sortedArray.map(dayObj => <Day createDayData ={this.props.createDayData} delete={this.props.delete} day={dayObj} key={dayObj.id} calendarId= {this.props.calendar.id}/>)
    }
    render() {
        return (
            <div className = "calendar">
                <h1 className ="my-calendar">Countdown to Christmas!</h1>
            <div id="calendar-container">
                {this.renderCalendarDays()}
            </div>
            </div>
        )
    }
}

export default withRouter(Calendar) 