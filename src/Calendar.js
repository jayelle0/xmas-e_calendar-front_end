import React from 'react'
import Day from './Day.js'

class Calendar extends React.Component{
    renderCalendar = () => {
        console.log(this.props)
       return this.props.days == undefined ? <h1>Loading Calendars</h1> : this.props.days.map(day => <Day {...day}/>)
        // const currentCalendar = this.props.calendars.filter(calendar => calendar.id == this.props.match.params.id)
        // console.log(currentCalendar)
        // return currentCalendar.days.map(day => <Day {...day}/>)
      
    }
    render() {
        return (
            <div className="container">
                {this.renderCalendar()}
            </div>
        )
    }
}

export default Calendar 