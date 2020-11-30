import React from 'react'
import DayForm from './Dayform.js'

class Day extends React.Component {
    state = {
        display: false
    }
    renderDayForm = () => {
        console.log("working")
        return (
            this.setState({display:!this.state.display})
        )
    }
    renderDay(){
        return (
            <div>
                <h5>{this.props.date}</h5>
                <button onClick={this.renderDayForm}>Edit</button>
                <DayForm display = {this.state.display}/>
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
