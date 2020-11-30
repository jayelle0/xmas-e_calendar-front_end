import React from "react";

export default class LogIn extends React.Component {
    state ={
        username: "", 
        password: ""
    }

    changeHandler = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    render(){
        // console.log(this.state)
        return (
            <form> 
                 <input type ="text" name= "username" placeholder= "enter username" value= {this.state.username} onChange= {this.changeHandler}/> <br/>
                <input type ="password" name= "password" placeholder= "enter password" value= {this.state.password} onChange= {this.changeHandler}/><br/>
                <input type ="submit" value ="Log In"/><br/>
            </form>
        )
    }
}