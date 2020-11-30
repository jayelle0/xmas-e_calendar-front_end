import React from 'react' 

export default class CalendarForm extends React.Component {

    state = {
        calendarName: ""
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    newCalendar = (event) => {
        event.preventDefault() 
        this.props.CalendarForm(this.state.calendarName)
            // UPDATE USER ID
    }
    

    render() {
        return  (
            <form onSubmit={this.newCalendar}>
            <label>Name Your Calendar</label>
            <input onChange={this.changeHandler} value={this.state.calendarName} name="calendarName" ></input>
            <button type="submit">Submit</button></form> 
        )
    }
}