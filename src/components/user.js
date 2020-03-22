import React, { Component } from 'react';
import { Link } from "@reach/router"
import userbase from "userbase-js"

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: ""
        }
    }

    componentDidMount () {
        userbase.init({
            appId: 'e492b137-acdf-435d-be20-5dfefb01cee1'
          }).then((session) => {
            console.log("SDK initialized successfully")
            if (session.user) {
              console.log("there is a valid active session:", session.user.username)
              this.setState({
                  user: session.user
                }
              )
            }
          }).catch((e) => console.error(e))        
    }

    render () { 
        return (
            <div className="hero-wrapper dark">
                <div className="hero-content">
                    <p>Hei sveis, {this.state.user.username}</p>
                    <Link to="/">home</Link>
                </div>
            </div>
        )
    }

}


export default User;