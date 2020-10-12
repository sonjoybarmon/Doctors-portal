import React from 'react';
import './App.css';
import Home from './Comporents/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Appointment from './Comporents/Appointment/Appointment/Appointment';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path='/'>
              <Home />
          </Route>
          <Route path='/home'>
              <Home />
          </Route>
          <Route path='/appointment'>
              <Appointment />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
