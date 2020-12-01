import React from 'react' 

export default class CalendarForm extends React.Component {

    state = {
        name: ""
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    newCalendar = (event) => {
        event.preventDefault() 
        this.props.calendarForm(this.state)
        this.setState({ name: ""})

    }
    

    render() {
        return  (
            <form onSubmit={this.newCalendar}>
            <label>Name Your Calendar</label>
            <input onChange={this.changeHandler} value={this.state.name} name="name" ></input>
            <button type="submit">Submit</button></form> 
        )
    }
}