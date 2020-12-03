import React from 'react'
import {NavLink} from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <div>
                
                <div className="text-center"><h1 className="title">AdventCalendar</h1></div><br></br>
                <div className="home-buttons-container d-flex justify-content-center">
                    <button className="btn-light home-button">
                        <NavLink to = "/signup">Create an Account</NavLink>
                    </button>
                    <button className="btn-light home-button">
                        <NavLink  to = "/login"> Sign In</NavLink>
                    </button>
                </div>
            </div>
        )

    }
}

export default Home