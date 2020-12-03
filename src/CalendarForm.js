import React from 'react' 
import {Redirect} from 'react-router-dom'
import {Form} from 'react-bootstrap'

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
            <>
            {this.props.user ?
                <>
                <div className="calendar-name-div">
                    <form className="login" onSubmit={this.newCalendar}>
                        <Form.Group>
                            <Form.Control class="calendar-name-input" onChange={this.changeHandler} value={this.state.name} name="name" placeholder= "Include Calendar Name" />
                            <button className="sign-up-button" type="submit">Submit</button>
                        </Form.Group>
                    </form> 
                </div>
                </>
            :
                <Redirect to="/"/>
            }
            </>
        )
    }
}