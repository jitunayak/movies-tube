import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class LoginPage extends Component {

    constructor(props) {
        super(props)
        localStorage.removeItem("token")
        let loggedIn = false
        this.state = {
            username: "",
            password: "",
            loggedIn
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e) {
        e.preventDefault()
        const { username, password } = this.state
        console.log("username: " + username)
        //Login magic
        if (username === "a" && password === "a") {
            localStorage.setItem("token", "3nx4vdmfvr45yuia")
            this.setState({
                loggedIn: true
            })
        }
    }

    render() {

        if (this.state.loggedIn) {
            return <Redirect to="/l" />
        }
        return (
            <div className="form">
                <form onSubmit={this.submitForm}>
                    <h2 className="text-lr" >Welcome back!</h2>
                    <h3 className="text-s" >login to access dashboard</h3>
                    <input className="input" type="text" name="username" placeholder="username" value={this.state.username} onChange={this.onChange} /><br />
                    <input className="input" type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onChange} /><br />
                    <button className="login-btn" type="submit">Log in</button>
                </form>
            </div >
        )
    }
}
