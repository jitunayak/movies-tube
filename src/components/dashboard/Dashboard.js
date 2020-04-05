import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom"

export default class DashboardPage extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        console.log("token found " + token)
        var loggedIn = true
        this.state = {
            loggedIn
        }

        if (token == null) {
            this.state =
            {
                loggedIn: false
            }

        }
    }

    render() {
        console.log(this.state.loggedIn)
        if (this.state.loggedIn === false) {
            console.log("return to login page")
            return <Redirect to="/" />
        }
        return (
            <div>
                <div>
                    <h1>Logged in</h1>
                    <Link to="/" >Logout</Link>
                </div>
            </div>
        )
    }
}

