import React from 'react'

class DayForm extends React.Component {
    state = {
        content: "", 
        image_video: "", 
        calendar_id: this.props.calendarId, 
        date: this.props.date
    }

    createCalendar = () => {
        fetch('http://localhost:3000/days', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
            .then(response => response.json())
            .then(data => {
            this.props.submitHandler(this.state);
         })
    }   
    changeHandler = event => {
        this.setState({[event.target.name]: event.target.value})
       
    }

    submitHandler = event => {
        return event.preventDefault() 
    }

    render() {
        // console.log(this.state)
        return this.props.display ? 
        (
            <form onSubmit={this.submitHandler}> 
                 <input type ="text" name= "content" placeholder= "enter message" value= {this.state.content} onChange= {this.changeHandler}/> <br/>
                <input type ="text" name= "image_video" placeholder= "include image/ video" value= {this.state.image_video} onChange= {this.changeHandler}/><br/>
                <input onClick={this.createCalendar} type ="submit" value ="Create/Update"/><br/>
                <input type ="submit" value ="Delete"/><br/>
            </form>
        )
        :
        ""
    }
}

export default DayForm 