import React from 'react';
import './App.css';
import LoginPage from './components/login/Login';
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom"
import DashboardPage from './components/dashboard/Dashboard';
import Registration from './components/login/Registration';
import Header from './components/header/header';

function App() {

  return (

    <Router>

      <Switch>
        <Route exact path="/"> <LoginPage /> </Route>
        <Route exact path="/l"><DashboardPage /></Route>
        <Route exact path="/registration"><Header title="Back" /><Registration /></Route>
      </Switch>

    </Router>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;