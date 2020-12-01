import React from 'react'
import DayForm from './Dayform.js'

class Day extends React.Component {
    state = {
        display: false,
        dayObj: this.props.day
    }
    renderDayForm = () => {
        return (
            this.setState({display:!this.state.display})
        )
    }

    submitHandler = (newDayObj) => {
        this.setState({dayObj: newDayObj})
    }
    renderDay(){
        return (
            <div>
                <h5>{this.state.dayObj.date}</h5>
                <h3>{this.state.dayObj.content}</h3>
                <button onClick={this.renderDayForm}>Edit</button>
                <DayForm display = {this.state.display} date = {this.props.date} calendarId = {this.props.calendarId} submitHandler={this.submitHandler}/>
            </div>
        )
    }
    render() {
        return (
            <div className="day">
                {this.renderDay()}
            </div>
        )
    }
}

export default Day 
