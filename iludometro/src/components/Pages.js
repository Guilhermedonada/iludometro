import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'
import Resume from './Resume'
import Friends from './Friends'

import Configuration from './Configuration'
import '../App.css';

function Pages() {
  return (
    <Router>
      <div className="css-main-grid css-main-grid-lg">
        <div className="css-side-menu">
          <Profile/>
          <Resume />
        </div>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/configuration" component={Configuration}/>
        </Switch>
        <div className="css-friends">
          <Friends />
        </div>
      </div>
    </Router>
  );
}

export default Pages;
