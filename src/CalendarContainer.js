import React from 'react'
import Day from './Day.js'

class CalendarContainer extends React.Component{
    renderCalendar = () => {
        
        const currentCalendar = this.props.calendars.filter(calendar => calendar.id == this.props.match.params.id)
        console.log(currentCalendar)
        return currentCalendar.days.map(day => <Day {...day}/>)
    }
    render() {
        return (
            <div className="container">
                {this.renderCalendar()}
            </div>
        )
    }
}

export default CalendarContainer 