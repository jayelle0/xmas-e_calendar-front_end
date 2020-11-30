import React from 'react'

class DayForm extends React.Component {
    state = {
        calendar_id: "",
        content: "", 
        image_video: ""
    }

    createCalendar = () => {
        fetch('http://localhost:3000/days', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
    }
    changeHandler = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return this.props.display ? 
        (
            <form> 
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