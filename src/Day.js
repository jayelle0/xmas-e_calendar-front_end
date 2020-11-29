import React from 'react'
import DayForm from './Dayform.js'

class Day extends React.Component {
    
    render() {
        return (
            <div className="day">
                <h5>{this.props.date}</h5>
            </div>
        )
    }
}

export default Day 
