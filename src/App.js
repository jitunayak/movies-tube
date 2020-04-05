import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/login/Login';
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom"
import DashboardPage from './components/dashboard/Dashboard';

function App() {

  return (

    <Router>
      <Switch>
        <Route exact path="/"><LoginPage /> </Route>
        <Route exact path="/l"><DashboardPage /></Route>
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