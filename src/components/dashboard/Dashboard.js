import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom"
import { Button } from 'react-bootstrap'
import LoginPage from '../login/Login'
import Main from '../SearchBoard/Main'

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
        let username = localStorage.getItem("username")
        const name = this.props.user
        console.log(name)
        console.log("logged in Dashbaord " + this.state.loggedIn)

        if (this.state.loggedIn === false) {
            console.log("no token found")
            return <Redirect to="/" />
        }
        if (this.state.logout === true) {
            return <LoginPage />
        }
        return (
            <div>
                <div>
                    <button className="logout-btn" onClick={this.logoutf}>
                        Log out
                    </button>
                    {' '}
                    <Main />
                </div>
            </div>
        )
    }
}

