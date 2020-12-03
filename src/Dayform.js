import React from 'react'

class DayForm extends React.Component {
    state = {
        content: this.props.day.content, 
        image_video: this.props.day.image_video, 
        calendar_id: this.props.calendarId, 
        date: this.props.day.date
    }
   
    
    changeHandler = event => {
        this.setState({[event.target.name]: event.target.value})
        
    }
    
    submitHandler = event => {
        event.preventDefault() 
        this.props.createDayData(this.props.day.id, this.state)
    }

    render() {
        console.log(this.props)
        return(
            <form onSubmit={this.submitHandler}> 
                 <input type ="text" name= "content" placeholder= "enter message" value= {this.state.content} onChange= {this.changeHandler}/> <br/>
                <input type ="text" name= "image_video" placeholder= "include image/ video" value= {this.state.image_video} onChange= {this.changeHandler}/><br/>
                <input type ="submit" value ="Create/Update"/><br/>
            </form>
        )
        // :
        // ""
    }
}

export default DayForm 