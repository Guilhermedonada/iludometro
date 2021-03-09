import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Configuration from './components/Configuration'
import Login from './components/Login'
import Profile from './components/Profile'
import Resume from './components/Resume'
import Friends from './components/Friends'
import Menu from './components/Menu'
import {UserProvider} from './components/context/UserContext'
import './App.css';

function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <div className="css-main-grid css-main-grid-lg">
            <div className="css-side-menu">
              <Profile/>
              <Resume />
            </div>
            <Route path="/home" component={Home}/>
            <Route path="/configuration" component={Configuration}/>
            <div className="css-friends">
              <Menu />
              <Friends />
            </div>
          </div>
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
