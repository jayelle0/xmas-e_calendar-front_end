import React from 'react'
import Day from './Day.js'

class Calendar extends React.Component{

   state= {
       dayArray: []
   }
    
    renderCalendar = () => {
        // let dayArray = []
        // console.log(this.props.calendar.days)

        let date = 0
        for (let i = 0; i < 24; i++) {
            date ++
            // this.state.dayArray.push(<Day id = {date} date = {date} calendarId={this.props.calendar.id} />) 
            fetch('http://localhost:3000/days', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    date: date,
                    calendar_id: this.props.calendar.id
                })
            })
        }
        // let newArray = [...this.state.dayArray]
        // this.props.calendar.days.forEach(day => {
        //     let currentDay = newArray.filter(d => day.id == d.id )
        //     currentDay = day
        //     let id = currentDay.id
        //     let index= newArray.findIndex(day => day.id ===id)
            
        //     newArray[index]= currentDay 
          
        // }) 
        //         this.setState({
        //             dayArray: newArray
        // })

        return this.state.dayArray
    }
    render() {
        console.log(this.state.dayArray)
        return (
            <div className="container">
                {this.renderCalendar()}
            </div>
        )
    }
}

export default Calendar 