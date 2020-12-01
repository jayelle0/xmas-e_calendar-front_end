import React from 'react'

export default class login extends React.Component {
    state ={
        username: "", 
        password: ""
    }

    changeHandler = event => {
        this.setState({[event.target.name]: event.target.value})
    }
    
    localSubmitHandler = (event) => {
        event.preventDefault() 
        this.props.loginHandler(this.state)
        // console.log(this.state)
        this.setState({
            username: "", 
            password: ""
        })
    }

 

    render() {
        return (
            <form onSubmit = {this.localSubmitHandler}> 
                <input type ="text" name= "username" placeholder= "enter username" value= {this.state.username} onChange= {this.changeHandler}/> <br/>
                <input type ="password" name= "password" placeholder= "enter password" value= {this.state.password} onChange= {this.changeHandler}/><br/>
                <input type ="submit" value ="Log In"/><br/>
            </form>
        )
    }
}