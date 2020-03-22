import React, { Component } from 'react';
import { Link, navigate } from "@reach/router"
import userbase from "userbase-js"

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            message: 'Logg inn! 👋'
        };
    
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount () {
        userbase.init({
            appId: 'e492b137-acdf-435d-be20-5dfefb01cee1'
          }).then((session) => {
            console.log("SDK initialized successfully")
            if (session.user) {
              console.log("there is a valid active session:", session.user.username)
              navigate('/user');
            }
          }).catch((e) => console.error(e))        
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }


    handleSubmit(event) {
        event.preventDefault();

        console.log("logger inn bruker!")

        userbase.signIn({
            username: this.state.username,
            password: this.state.password
          }).then((user) => {
              console.log("user logged in!")
              navigate('/user');
            }).catch((e) => {
                console.error(e)
                this.setState({message: "Ånei: " + e.message + " 😿"});
              })    
    }
    
    render () { 
        return (
            <div className="hero-wrapper dark">
                <div className="hero-content">
                    <p>{this.state.message}</p>

                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="username" placeholder="brukernavn" value={this.state.username} onChange={this.handleUsernameChange} />
                        <input type="text" name="password" placeholder="passord" value={this.state.password} onChange={this.handlePasswordChange} />
                        <input type="submit" value="OK" />
                    </form>


                    <Link to="/">home</Link>
                </div>
            </div>
        )
    }

}


export default Login;