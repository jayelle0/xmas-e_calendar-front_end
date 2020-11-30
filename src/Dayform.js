import React from 'react'

class DayForm extends React.Component {
    state = {
        content: "", 
        image_video: ""

    }

    changeHandler = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <form> 
                 <input type ="text" name= "content" placeholder= "enter message" value= {this.state.content} onChange= {this.changeHandler}/> <br/>
                <input type ="text" name= "image_video" placeholder= "include image/ video" value= {this.state.image_video} onChange= {this.changeHandler}/><br/>
                <input type ="submit" value ="Create/Update"/><br/>
                <input type ="submit" value ="Delete"/><br/>
            </form>
        )
    }
}

export default DayForm 