import React from 'react'
import Day from './Day.js'

class Calendar extends React.Component{

   

    renderCalendarDays=() => {
       let sortedArray = this.props.calendar.days.sort((a, b) => (a.date > b.date) ? 1 : -1)
        // console.log(sortedArray)
        
       return sortedArray.map(dayObj => <Day day={dayObj} key={dayObj.id}/>)
    }


    render() {
        return (
            <div className="container">
                {this.renderCalendarDays()}
            </div>
        )
    }
}

export default Calendar 