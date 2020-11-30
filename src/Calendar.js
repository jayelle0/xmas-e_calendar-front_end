import React from 'react'
import Day from './Day.js'

class Calendar extends React.Component{
    renderCalendar = () => {
        let dayArray = []
        console.log(this.props.calendar.days)
        let date = 0
        for (let i = 0; i < 24; i++) {
            date ++
            dayArray.push(<Day id = {date} date = {date} calendarId={this.props.calendar.id}/>) 
        }
        this.props.calendar.days.forEach(day => {
            let currentDay = dayArray.filter(d => day.id == d.id )
            currentDay = day 
            // currentDay.date = day.date
            // currentDay.content = day.content
            // currentDay.image_video = day.image_video
        })
    //    return this.props.calendars == undefined ? <h1>Loading Calendars</h1> : this.props.calendars.days.map(day => <Day {...day}/>)
        // const currentCalendar = this.props.calendars.filter(calendar => calendar.id == this.props.match.params.id)
        // console.log(currentCalendar)
        // return currentCalendar.days.map(day => <Day {...day}/>)
        return dayArray
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