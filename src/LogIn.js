import React from 'react'
import {Form} from 'react-bootstrap'

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
            <div className="form-group login-div">
                <form className="login" onSubmit = {this.localSubmitHandler}> 
                    <Form.Group>
                        <Form.Control className="login-item" type ="text" name= "username" placeholder= "enter username" value= {this.state.username} onChange= {this.changeHandler}/> <br/>
                        <Form.Control className="login-item"  type ="password" name= "password" placeholder= "enter password" value= {this.state.password} onChange= {this.changeHandler}/><br/>
                        <Form.Control className="sign-up-button" type ="submit" value ="Log In"/><br/>
                    </Form.Group>
                </form>
            </div>
            
        )
    }
}