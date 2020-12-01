import React from 'react'
import {NavLink} from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <>
            <NavLink to = "/signup"> 
                <li>Create an Account </li>             
            </NavLink>
              <NavLink to = "/login"> 
              <li>Sign In </li>             
             </NavLink>
          </>
        )

    }
}

export default Home