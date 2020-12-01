import React from 'react'

class DayForm extends React.Component {
    state = {
        content: "", 
        image_video: "", 
        calendar_id: this.props.calendarId, 
        date: this.props.date
    }
    localClickHandlerCreate = () => {
        this.createDayData(this.props.id)
    }
    localClickHandlerDelete = () => {
        this.deleteDayData(this.props.id)
    }
    createDayData = (id) => {
        fetch(`http://localhost:3000/days/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
            .then(response => response.json())
            .then(() => {
            this.props.submitHandler(this.state);
         })
    }
    deleteDayData = (id)=> {
        fetch(`http://localhost:3000/days/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            }
        })
    }   
    changeHandler = event => {
        this.setState({[event.target.name]: event.target.value})
       
    }

    submitHandler = event => {
        return event.preventDefault() 
    }

    render() {
        return this.props.display ? 
        (
            <form onSubmit={this.submitHandler}> 
                 <input type ="text" name= "content" placeholder= "enter message" value= {this.state.content} onChange= {this.changeHandler}/> <br/>
                <input type ="text" name= "image_video" placeholder= "include image/ video" value= {this.state.image_video} onChange= {this.changeHandler}/><br/>
                <input onClick={this.localClickHandlerCreate} type ="submit" value ="Create/Update"/><br/>
                <input onClick={this.localClickHandlerDelete}type ="submit" value ="Delete"/><br/>
            </form>
        )
        :
        ""
    }
}

export default DayForm 