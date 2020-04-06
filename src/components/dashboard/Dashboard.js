import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom"
import { Button } from 'react-bootstrap'

export default class DashboardPage extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        console.log("token found " + token)
        var loggedIn = true
        var logout = false
        this.state = {
            loggedIn,
            logout
        }


        if (token == null) {
            this.state =
            {
                loggedIn: false
            }

        }
    }

    logoutf = () => {
        localStorage.clear("token")
        this.setState({ logout: true })
    };

    render() {
        console.log(this.state.loggedIn)
        if (this.state.loggedIn === false) {
            console.log("return to login page")
            return <Redirect to="/" />
        }
        if (this.state.logout === true) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <div>
                    <h1>Logged in</h1>
                    <button className="logout-btn" onClick={this.logoutf}>
                        Log out
                    </button>
                    {' '}
                </div>
            </div>
        )
    }
}

