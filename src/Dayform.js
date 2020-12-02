import React from 'react'

class DayForm extends React.Component {
    state = {
        content: "", 
        image_video: "", 
        calendar_id: this.props.calendarId, 
        date: this.props.date
    }
    localClickHandlerCreate = () => {
        this.props.create(this.props.id, this.state)
    }
    localClickHandlerDelete = () => {
        this.setState({content: "", 
        image_video: "", 
        calendar_id: this.props.calendarId, 
        date: this.props.date
    })
    this.props.delete(this.props.id, this.state)
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