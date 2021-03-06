import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import logo from './logo.jpg';
import { Alert } from 'react-bootstrap';
import DashboardPage from '../dashboard/Dashboard';


export default class LoginPage extends Component {

    state = {
        username: "",
        password: "",
        loggedIn: false,
        alert: false,
        alert_msg: ""
    }
    onChange = this.onChange.bind(this)
    submitForm = this.submitForm.bind(this)

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    submitForm(e) {
        e.preventDefault()
        const { username, password } = this.state
        //console.log("username: " + username)
        //Login magic
        if (username === "jitu" ||

            password === "abc") {
            localStorage.setItem("token", "3nx4vdmfvr45yuia")
            this.setState({
                loggedIn: true
            })
        }
        else if (username === "" && password === "") {
            this.setState({
                alert: true,
                alert_msg: "Fields are empty"
            })


        }
        else {
            this.setState({
                alert: true,
                alert_msg: " Username or Password is incorrect"
            })

        }
    }

    render() {
        if (localStorage.getItem("token")) {
            console.log("Already logged in " + localStorage.getItem("token"))
            this.state.loggedIn = true
            console.log("logged in " + this.state.loggedIn)
            localStorage.setItem("username", this.state.username)
        }
        if (this.state.loggedIn) {
            return <Redirect to="/l" />
        }


        if (this.state.alert) {
            return <div> <LoginPage /> <div style={{ marginTop: '20px' }} class="alert alert-danger" role="alert">
                {this.state.alert_msg}
            </div>

            </div>


        }
        return (
            <div className="form">
                <form onSubmit={this.submitForm}>
                    <img src={logo} style={{ width: '100px' }} className="App-logo" alt="logo" />
                    <h2 className="text-lr" >Welcome back!</h2>
                    <h3 className="text-s" >ଆସ ସମସ୍ତେ ମିଶି ବସି  ଦେଖିବା </h3>
                    <input className="input" type="text" name="username" placeholder="username" value={this.state.username} onChange={this.onChange} /><br />
                    <input className="input" type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onChange} /><br />
                    <button className="login-btn" type="submit">Log in</button>
                    <br /><Link className="link-none" to="/registration">Register for an account</Link>
                </form>
            </div >
        )
    }
}
